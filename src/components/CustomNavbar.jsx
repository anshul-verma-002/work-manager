"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { Menu, Power, X } from "lucide-react";
import UserContext from "../context/userContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { logout } from "../service/userService";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const context = useContext(UserContext);
  // console.log(context);

  async function doLogout() {
    try {
      const response = await logout();
      // console.log(response.response)
      context.setUser(undefined);
    } catch (error) {
      console.log(error.response);
      toast.error("Error in Logout");
    }
  }

  return (
    <nav className="bg-linear-to-r from-emerald-200 via-cyan-200 to-sky-300 shadow-md h-12 py-3 px-4 flex justify-between">
      <div className="flex flex-row gap-2 justify-center items-center">
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <Menu size={28} />
        </button>
        {isOpen && (
          <div className="fixed inset-0 z-50">
            {/* Background Overlay */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <div className="absolute top-0 left-0 ml-0.5 h-full w-50 bg-slate-900 shadow-lg p-5 rounded-r-xl">
              <button
                onClick={() => setIsOpen(false)}
                className="mb-6 w-full border-b border-black pb-2"
              >
                <X size={24} className="text-white font-extrabold" />
              </button>

              <ul className="flex flex-col gap-4 font-semibold text-white ">
                {context.user && (
                  <>
                    <li>
                      <Link href={"/"} onClick={() => setIsOpen(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href={"/add-task"} onClick={() => setIsOpen(false)}>
                        Add Task
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/show-tasks"}
                        onClick={() => setIsOpen(false)}
                      >
                        Show Tasks
                      </Link>
                    </li>
                  </>
                )}
              </ul>

              <div className="flex flex-col gap-3 mt-4">
                {context.user && (
                  <>
                    <Link
                      className=" bg-linear-to-r from-blue-600 to-cyan-400 text-white   rounded-md p-2 font-semibold flex justify-center items-center"
                      href={"/profile/user"}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      {context.user.name}
                    </Link>

                    <Link
                      className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-md p-2  font-semibold flex justify-center items-center flex-row   gap-1"
                      href={"/loginPage"}
                      onClick={() => {
                        doLogout();
                        setIsOpen(false);
                      }}
                    >
                      <Power /> Logout
                    </Link>
                  </>
                )}
                {!context.user && (
                  <>
                    <Link href={"/"} className="flex justify-start ml-2 font-semibold text-white">Home</Link>
                    <Link
                      className=" bg-gradient-to-r from-blue-600 to-cyan-400 text-white   rounded-md p-2 font-semibold flex justify-center items-center"
                      href={"/loginPage"}
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>

                    <Link
                      className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-md p-2  font-semibold flex justify-center items-center"
                      href={"/signup"}
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
        <Link href={"/"} className=" text-black font-bold text-xl">
          Work Manager
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-4 font-semibold text-black">
          {context.user && (
            <>
              <li className=" transition-all duration-200 hover:-translate-y-1 ">
                <Link href={"/"}>Home</Link>
              </li>
              <li className=" transition-all duration-200 hover:-translate-y-1 ">
                <Link href={"/add-task"}>Add Task</Link>
              </li>
              <li className=" transition-all duration-200 hover:-translate-y-1 ">
                <Link href={"/show-tasks"}>Show Tasks</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="hidden md:flex gap-4 justify-center items-center">
        {context.user && (
          <>
            <Link
              className="bg-blue-950 text-white font-semibold px-3 py-1 rounded-md shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              href={"/profile/user"}
            >
              {context.user.name}
            </Link>
            <Link
              className=" bg-blue-950 text-white font-semibold px-3 py-1 rounded-md shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-row justify-center items-center gap-1"
              href={"/loginPage"}
              onClick={doLogout}
            >
              <Power /> Logout
            </Link>
          </>
        )}
        {!context.user && (
          <>
          <Link href={"/"} className="flex justify-start ml-2 font-semibold text-black">Home</Link>
            <Link
              className="bg-blue-950 text-white font-semibold px-3 py-1 rounded-md shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              href={"/loginPage"}
            >
              Login
            </Link>
            <Link
              className=" bg-blue-950 text-white font-semibold px-3 py-1 rounded-md shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              href={"/signup"}
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default CustomNavbar;
