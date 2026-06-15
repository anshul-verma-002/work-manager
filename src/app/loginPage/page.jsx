"use client";

import Image from "next/image";
import Link from "next/link";
import loginSvg from "../../assests/signup.svg";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { currentUser, login } from "../../service/userService";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import UserContext from "../../context/userContext";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const clearLoginForm = () => {
    setData({
      email: "",
      password: "",
    });
  };

  const handleLoginForm = async (event) => {
    event.preventDefault();
    console.log(data);

    if (data.email.trim() === "" || data.email.trim() === null) {
      toast.info("Email is required !!");
      return;
    }
    if (data.password.trim() === "" || data.password.trim() === null) {
      toast.info("Password is required !!");
      return;
    }

    try {
      setLoading(true);
      const res = await login(data);
      // console.log(res);
      toast.success(res.message);
      setLoading(false);
      const current = await currentUser();
      setUser(current.user);
      router.push("/");

    } catch (error) {
      
      setLoading(false);
      toast.error("Error in Login !!");
      console.log(error.response);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        {/* Image + Heading */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <Image
            src={loginSvg}
            alt="Login"
            className="w-48 md:w-56"
            loading="eager"
          />
          <h1 className="text-2xl font-bold text-center">
            Login To Your Account
          </h1>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleLoginForm}>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-black rounded-md p-2"
              name="user_email"
              value={data.email}
              onChange={(event) => {
                setData({
                  ...data,
                  email: event.target.value,
                });
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-black rounded-md p-2"
              name="user-password"
              value={data.password}
              onChange={(event) => {
                setData({
                  ...data,
                  password: event.target.value,
                });
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-3">
            <button
              disabled={loading}
              type="submit"
              className="bg-linear-to-r from-blue-600 to-cyan-400 text-white font-semibold rounded-md px-4 py-2"
            >
              {loading ? (
                <div className="flex flex-row justify-center items-center gap-2">
                  <Loader className="animate-spin" />
                  <span>Logging</span>
                </div>
              ) : (
                "Login"
              )}
            </button>

            <button
              type="reset"
              className="bg-linear-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-md px-4 py-2"
              onClick={clearLoginForm}
            >
              Clear
            </button>
          </div>

          {/* Signup Link */}
          <p className="text-center text-sm mt-2 font-semibold">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-700 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
