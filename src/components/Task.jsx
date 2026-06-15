"use client";
import { deleteTask } from "../service/taskService";
import { Trash2Icon } from "lucide-react";
import React from "react";

const colors = [
  "bg-gradient-to-r from-sky-100 to-cyan-100",
  "bg-gradient-to-r from-purple-100 to-pink-100",
  "bg-gradient-to-r from-green-100 to-emerald-100",
  "bg-gradient-to-r from-orange-100 to-yellow-100",
  "bg-gradient-to-r from-rose-100 to-red-100",
  "bg-gradient-to-r from-indigo-100 to-blue-100",
  "bg-gradient-to-r from-teal-100 to-cyan-100",
  "bg-gradient-to-r from-lime-100 to-green-100",
  "bg-gradient-to-r from-fuchsia-100 to-purple-100",
  "bg-gradient-to-r from-amber-100 to-orange-100",
  "bg-gradient-to-r from-violet-100 to-indigo-100",
  "bg-gradient-to-r from-pink-100 to-rose-100",
];

const Task = ({ task, deleteTaskParent }) => {
  const colorIndex =
    task._id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) %
    colors.length;

  return (
    <div
      className={`${colors[colorIndex]} border border-gray-200 rounded-xl p-4 max-w-sm shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="flex flex-row justify-between ">
        <div className="text-md font-semibold ">{task.title}</div>
        <Trash2Icon
          onClick={() => {
            deleteTaskParent(task._id);
          }}
        />
      </div>
      <div className="text-sm">{task.content}</div>
      <div className="flex flex-row justify-between mt-3 items-center">
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            task.status === "Completed" ? "bg-green-100" : "bg-gray-500"
          }`}
        >
          {task.status}
        </span>

        <span className="text-xs text-gray-700">
          {new Date(task.addedDate).toLocaleDateString("en-IN", {
            timeZone: "Asia/Kolkata",
          })}
        </span>
      </div>
    </div>
  );
};

export default Task;
