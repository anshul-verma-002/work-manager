import { connectDb } from "../../../../helper/db";
import { User } from "../../../../models/User";
import { NextResponse } from "next/server";


// connecting database

connectDb();

// deleting user by id 
export async function DELETE(request, { params }) {
  const { userId } = await params;

  try {
    const res = await User.deleteOne({
      _id: userId,
    });
    console.log(res)
    if (res.deletedCount == 0) {
      return NextResponse.json({
        message: "User Not found",
        success: false,
      });
    }
    return NextResponse.json({
      message: "User Deleted !! ",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error in deleting User ",
      success: false,
    });
  }
}

// Getting user By id 

export async function GET(request, { params }) {
  const { userId } = await params;

  try {
    const user = await User.findOne({
      _id: userId,
    });
    console.log(user);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "User Not found",
      success:false,
    });
  }
}

// Updating user

export async function PUT(request, {params}){
const { name, email, password, about, profileUrl } = await request.json();
const {userId} = await params;

try {

    const user = await User.findById({
        _id:userId,
    })

   user.name = name,
   user.password = password,
   user.about = about,
   user.profileUrl = profileUrl

  const res = await user.save();
  console.log(res)

  return NextResponse.json(res,{
    status:201
  })
} catch (error) {
    console.log(error)
    return NextResponse.json({
        message:"Can't Update user",
        success:false
    },{
        status:401
    })
}
}
