import { getResponse } from "../../../../helper/responeMessage";
import { Task } from "../../../../models/Task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { taskId } = await params;

  try {
    const task = await Task.findById({
      _id: taskId,
    });
    return NextResponse.json(task, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return getResponse("Error in getting Task", 404, false);
  }
}


export async function PUT(request, { params }) {
  try {
    const { taskId } = await params;
    const { title, content, status } = await request.json();
    const task = await Task.findById(taskId);
    task.title = title;
    ((task.content = content), (task.status = status));
    const response = await task.save();
    // console.log(response)
    return NextResponse.json(response, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return getResponse("Error in updating Task ", 500, false);
  }
}

export async function DELETE(request, { params }) {
   try {
    const { taskId } = await params;
    
    const res = await Task.deleteOne({
      _id:taskId
    });
    // console.log(res)
    return NextResponse.json({
      message:"task Deleted !!",
      success:true
    })
   } catch (error) {
    console.log(error);
    return getResponse("Error in Deleting Task ", 500, false);
   }
}
