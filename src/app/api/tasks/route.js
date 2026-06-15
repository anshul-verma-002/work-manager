

import { getResponse } from "../../../helper/responeMessage.jsx";
import { Task } from "../../../models/Task.jsx";
import { User } from "../../../models/User.jsx";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"


// get all the tasks
export async function GET() {
  try {

   const users = await Task.find()
   return NextResponse.json(users,{
    status:200
   })

  } catch (error) {
    console.log(error)
    return getResponse("Error in Fetching data ",401,false)
  
  }
}

// adding a task
export async function POST(request) {
  const { title, content, addedDate, status, userId } = await request.json();

  // fetching logged in user id 
  
    const token = request.cookies.get("token")?.value;
      if (!token) {
        return NextResponse.json(
          { message: "Unauthorized" },
          { status: 401 }
        );
      }
      const data = jwt.verify(token, process.env.JWT_SECRET)

  try {
    const task = new Task({
      title,
      content,
      status,
      userId:data._id,
    });
    const response = await task.save();
    console.log(response);

    return NextResponse.json(response, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error in creating Task",
    },{
        status:400
    });
  }
}
