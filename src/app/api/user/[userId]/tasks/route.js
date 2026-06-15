import { getResponse } from "../../../../../helper/responeMessage";
import { Task } from "../../../../../models/Task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = await params;
  let tasks = []
  try {
     tasks = await Task.find({
        userId:userId,
    })
    return NextResponse.json(tasks,{
        status:200
    })
  } catch (error) {
    console.log(error)
    return getResponse("Error in fetching tasks of this user",404,false)
  }
}

