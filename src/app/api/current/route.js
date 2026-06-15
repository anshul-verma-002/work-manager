import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "../../../models/User";

export async function GET(request) {
  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const data = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(data._id).select("-password");

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid token" },
      { status: 401 }
    );
  }
}