import { NextRequest, NextResponse } from "next/server";

export async function  GET(request, {params}){
    const {userId,postId} = await params
    console.log("User ID : ",userId)
    console.log("Post Id : ",postId)
return NextResponse.json(await params)
}