import { NextResponse } from "next/server"


export const getResponse = (message, statusCode, successStatus) =>{
    return NextResponse.json({
        message:message,
        successStatus:successStatus
    },{
        status:statusCode,
    })
}