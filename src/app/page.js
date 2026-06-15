
"use client"
import Link from "next/link";
import Footer from "../components/Footer";
import { useContext } from "react";
import UserContext from "../context/userContext";
import { ArrowRight } from "lucide-react";

// export const metadata = {
//   title: "Home : Work Manager",
// };

const Home = () => {

  const context = useContext(UserContext)

  return (
    <>
      <section className="min-h-[85vh] bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="max-w-6xl mx-auto px-6 py-16">

          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800">
              Welcome to Work Manager
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Organize your work, manage tasks efficiently, track progress,
              and stay productive with a secure task management system.
            </p>
            {
              context?.user  && 
              <div className="flex justify-center gap-4 mt-8 flex-wrap">
              <Link
                href={"/add-task"}
                className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-400"
              >
                Add New Task
              </Link>

              <Link
                href={"/show-tasks"}
                className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-400"
              >
                View Tasks
              </Link>
            </div>
            }

             {
              !context?.user  && 
              <div className="flex justify-center gap-4 mt-8 flex-wrap">
              <Link
                href={"/loginPage"}
                className="flex flex-row gap-2 justify-center items-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-400"
              >
                <ArrowRight />   Get Started
              </Link>
            </div>
            }
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-3">
                Secure Authentication
              </h2>
              <p className="text-gray-600">
                Register, login, and logout securely. Access your tasks only
                after authentication.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-3">
                Task Management
              </h2>
              <p className="text-gray-600">
                Create, update, delete, and organize your daily work tasks
                effortlessly.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-3">
                Progress Tracking
              </h2>
              <p className="text-gray-600">
                Monitor pending and completed tasks to stay on top of your
                productivity.
              </p>
            </div>

          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-3xl font-bold text-blue-600">+</h3>
              <p className="text-gray-600 mt-2">Create Tasks</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-3xl font-bold text-green-600">✓</h3>
              <p className="text-gray-600 mt-2">Completed Tasks</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-3xl font-bold text-orange-600">⏳</h3>
              <p className="text-gray-600 mt-2">Pending Tasks</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-3xl font-bold text-purple-600">👤</h3>
              <p className="text-gray-600 mt-2">Profile Dashboard</p>
            </div>

          </div>

          {/* Feature List */}
          <div className="mt-16 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              Features Included
            </h2>

            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              <li>✅ User Registration & Login</li>
              <li>✅ Secure Route Protection</li>
              <li>✅ Add New Tasks</li>
              <li>✅ View All Tasks</li>
              <li>✅ Pending / Completed Status</li>
              <li>✅ Task Creation Date</li>
              <li>✅ User Profile Information</li>
              <li>✅ Logout Functionality</li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;