"use client";

import { toast } from "react-toastify";
import Task from "../../components/Task";
import UserContext from "../../context/userContext";
import { deleteTask, getTasksOfUser } from "../../service/taskService";
import { useContext, useEffect, useState } from "react";

const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);

  async function loadTasks(userId) {
    try {
      const tasks = await getTasksOfUser(userId);
      setTasks([...tasks]);
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTaskParent(taskId) {
    try {
      const result = await deleteTask(taskId);
      toast.success("Task Deleted ");
      console.log(result.response);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.log(error.response);
      toast.error("Error in Deleting Task");
    }
  }

  useEffect(() => {
    if (context) {
      loadTasks(context?.user?._id);
    }
  }, [context.user]);

  return (
    <div className="flex flex-col gap-4 flex-start px-3 py-2">
      <div className="flex justify-center text-xl font-semibold">
        My Tasks ({tasks.length})
      </div>
      <div className="flex md:flex-row flex-col gap-5">
        {tasks.map((task) => (
          <Task
            task={task}
            key={task._id}
            deleteTaskParent={deleteTaskParent}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;
