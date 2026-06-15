import { User } from "../../../models/User.jsx";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const user = await User.findOne({
      email: email,
    });

    // user exists or not 
    if (!user) {
      throw new Error("User Not Found");
    }

   // checking password  
    const match = bcrypt.compareSync(password, user.password)
    if(!match){
        throw new Error("Invalid Credentials")
    }

    // genrating token
     const token = jwt.sign({
        _id:user._id,
        name:user.name
     },process.env.JWT_SECRET)

     console.log(token)

    const response =  NextResponse.json(
      { success: true,message:"Login Successfull"},
      { status: 200,},
    );
    response.cookies.set("token",token,{
        maxAge: 60*60*24,
        httpOnly:true
    })
    return response

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 404,
      },
    );
  }
}
