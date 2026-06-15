import { connectDb } from "../helper/db.jsx";
import mongoose, { Schema } from "mongoose";

connectDb();

const UserSchema = new Schema({
    name:String,
  
    email:{
        type:String,
        required : [true,"Email is required"],
        unique:true
    },
    password :{
        type:String,
        required: [true,"Password is required"]
    },
    about:String,
    profileUrl:String,
    // address:{
    //     street:String,

    // }
})

export const User=
mongoose.models.users || mongoose.model("users",UserSchema)