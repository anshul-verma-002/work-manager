
import { mongoose, Schema } from "mongoose";


const TaskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    addedDate:{
        type:Date,
        default: Date.now()
    },
    status:{
        type:String,
        enum:["Pending", "Completed","Just-added"],
        default:"Pending"
    },
    userId:{
        type:mongoose.ObjectId,
        required:true
    }
})

export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema)