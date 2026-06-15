"use client";

import UserContext from "../../../context/userContext";
import React, { useContext } from "react";

const UserPage = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <p className="text-lg">Loading user information...</p>
      </div>
    );
  }
  const id = Math.random().toString(36).substring(2, 15);
  return (
    <div className="flex justify-center  p-4  mt-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 border">
        
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
            {user?.name?.charAt(0)?.toUpperCase()}
          </div>

          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {user.name}
          </h2>

          <p className="text-gray-500">{user.email}</p>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-sm text-gray-500">User ID</p>
            <p className="font-medium break-all">
              {id}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">About</p>
            <p className="font-medium">
              {user.about || "No description available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;