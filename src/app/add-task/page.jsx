"use client";
import Image from "next/image";
import login  from "../../assests/login.svg";
import { useState } from "react";
import { addTask } from "../../service/taskService";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";


const AddTask = () => {

  const [task, setTask] = useState({
    title:"",
    content:"",
    status:"none",
    userId:"6a228b0c30c02ed5d0daeac8" 
  })

  const [loading, setLoading] = useState(false)


  const handleClearForm = () =>{
    setTask({
      title:"",
      content:"",
      status:"none",
    })
  }
  const handleAddTask = async (event) =>{
    event.preventDefault();
    console.log(task)

    try {

      if(task.title.trim()==="" || task.title.trim()===null){
        toast.info("Title is Required !!")
        return
      }
      if(task.content.trim()==="" || task.content.trim()===null){
        toast.info("Content is Required !!")
        return
      }
       if(task.status.trim()==="none"){
        toast.info("Please select status ")
        return
      }
      setLoading(true)
      console.log(task)
      const result = await addTask(task)
      toast.success("Task Added Successfully ")
      setLoading(false)

      setTask({
        title:"",
        content:"",
        userId:"",
        status:""
      })
      
    } catch (error) {
      setLoading(false)
      console.log(error)
      toast.error("Cannot Add Task")

      setTask({
        title:"",
        content:"",
        userId:"",
        status:"none"
      })
    }

  }

  return (
    <div className="min-h-screen flex justify-center items-center p-4 ">
      <div className="w-full max-w-lg">
        <div className="flex flex-col items-center justify-center py-2 gap-3">
          <Image src={login} className="mt-3 min-w-xs md:max-w-lg" alt="LoginImage"/>
           <h1 className="mb-4 text-black text-xl font-semibold"> Add Your Task Here</h1>
        </div>
      
       <form action="#!" className="flex flex-col gap-5" onSubmit={handleAddTask}>
        <div className="flex flex-col gap-2">
          <label>Task title</label>
          <input type="text" className=" p-2 block w-full h-10 border border-black rounded-md pl-2" placeholder="Enter the title"
          name="task_title"
          value={task.title}
          onChange={(event)=>{
            setTask({
              ...task,
              title:event.target.value
            })
          }}
          />
        </div>
         <div className="flex flex-col gap-2">
          <label>Task content</label>
          <textarea type="text" rows={5} className="border  p-2 block w-full border-black rounded-md pl-2" placeholder="Enter the Content"
          name="task_content"
          value={task.content}
          onChange={(event)=>{
            setTask({
              ...task,
              content:event.target.value
            })
          }}/>
        </div>

        <div className="flex flex-col gap-2">
          <label>Status</label>
          <select id="task_status" className="border border-black rounded-md block w-full px-2 h-10"
           name="task_status"
          value={task.status}
          onChange={(event)=>{
            setTask({
              ...task,
              status:event.target.value
            })
          }}
          >
            <option value="none" disabled>--- select status ---</option>
            <option value="Pending" className="text-sm">Pending</option>
            <option value="Completed" className="text-sm">Completed</option>
          </select>
        </div>

        <div className="flex md:flex-row flex-col gap-2 justify-center mt-3 mb-4">
          <button 
          disabled={loading}
          type="submit" 
          className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold rounded-md px-4 py-2">
            {
              loading ? <div className="flex flex-row gap-2 items-center justify-center"><Loader className="animate-spin"/><span>Adding</span></div>: "Add Task"
            }
          </button>
          <button 
          onClick={handleClearForm}
          type="button" className="bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-md px-4 py-2">Clear</button>
        </div>
       </form>
      </div>
      
    </div>
  )
}

export default AddTask