"use client";

import Image from "next/image";
import signupSvg from "../../assests/new.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { signUp } from "../../service/userService";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupPage = () => {

  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileUrl:
      "https://www.bing.com/images/search?view=detailV2&ccid=PKlD9uuB&id=47D8EDF894ECEB1B05869482FC174A2F531DE80D&thid=OIP.PKlD9uuBX0m4S8cViqXZHAHaHa&mediaurl=https%3a%2f%2fstatic.vecteezy.com%2fsystem%2fresources%2fpreviews%2f021%2f548%2f095%2foriginal%2fdefault-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg&exph=1920&expw=1920&q=user+deafult+profile+image&FORM=IRPRST&ck=A75817F6F94E096AC75E94B10772060C&selectedIndex=1&itb=0",
  });

  const [loading, setLoading] = useState(false);

  const handleClear = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(data);

    if (data.name.trim() === "" || data.name.trim() === null) {
      toast.info("Name is Required !!");
      return;
    }
    if (data.email.trim() === "" || data.email.trim() === null) {
      toast.info("Email is Required !!");
      return;
    }
    if (data.password.trim() === "" || data.password.trim() === null) {
      toast.info("Password is Required !!");
      return;
    }

    //form submit

    try {
      setLoading(true);
      const res = await signUp(data);
      // console.log(res);
      toast.success("User Registered Successfully");
      setLoading(false);

       setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
    router.push("/loginPage")

    } catch (error) {
      setLoading(false);
      console.log(error.response);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 mt-5">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl px-6 pb-6">
        {/* Image + Heading */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src={signupSvg}
            alt="Signup"
            className="w-48 md:w-56"
            loading="eager"
          />
          <h1 className="text-2xl font-bold text-center mt-2">
            Create Your Account
          </h1>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-1">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-black rounded-md p-2"
              value={data.name}
              name="user_name"
              onChange={(event) => {
                setData({
                  ...data,
                  name: event.target.value,
                });
              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-black rounded-md p-2"
              value={data.email}
              name="user_email"
              onChange={(event) => {
                setData({
                  ...data,
                  email: event.target.value,
                });
              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-black rounded-md p-2"
              value={data.password}
              name="user_password"
              onChange={(event) => {
                setData({
                  ...data,
                  password: event.target.value,
                });
              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>About</label>
            <textarea
              rows={2}
              placeholder="Tell us something about yourself"
              className="border border-black rounded-md p-2"
              value={data.about}
              name="user_about"
              onChange={(event) => {
                setData({
                  ...data,
                  about: event.target.value,
                });
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-3">
            <button
              disabled={loading}
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold rounded-md px-4 py-2"
            >
              {
                loading ? <div className="flex flex-row gap-2 justify-center items-center"><Loader className="animate-spin"/><span>Signing in</span></div> : "Sign up" 
              }
            </button>

            <button
              onClick={handleClear}
              type="reset"
              className="bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-md px-4 py-2"
            >
              Clear
            </button>
          </div>

          <div className="flex justify-center items-center mt-5">
            <p className="text-sm font-semibold ">Already have an account ? {"  "} <Link className="text-blue-500 hover:underline" href={"/loginPage"} >Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
