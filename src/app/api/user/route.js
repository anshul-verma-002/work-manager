import { connectDb } from "../../../helper/db.jsx";
import { NextResponse } from "next/server";
import { User } from "../../../models/User.jsx";
import bcrypt from "bcryptjs"

connectDb();

export async function GET(request) {
  let users = [];

  try {
    users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    console.lg(error);
    return NextResponse.json({
      message: "Failed to find user",
      status: false,
    });
  }
}

export async function POST(request) {
  //fetching user Data from request
  const { name, email, password, about, profileUrl } = await request.json();
  console.log(name, email, password, about, profileUrl);
  const user = new User({
    name,
    email,
    password,
    about,
    profileUrl,
  });

  try {
    const saltRounds = parseInt(process.env.BCRYPT_SALT)
    user.password = await bcrypt.hash(user.password, saltRounds)
    console.log(user)
    await user.save();
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to create user",
      success: false,
    },{
      status:500
    });
  }
}

// export function DELETE() {
//   console.log("delete Api Called ");
//   return NextResponse.json(
//     {
//       message: "Delete The User",
//       status: true,
//     },
//     {
//       status: 201,
//       statusText: "status Text",
//     },
//   );
// }
