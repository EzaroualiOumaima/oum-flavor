import Link from "next/link";
import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { UserButton } from "@clerk/nextjs";
import { SlCalender } from "react-icons/sl";

const Sidebar = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="hidden md:flex flex-col w-64 bg-gray-800">
          <div className="flex items-center justify-center h-16 bg-gray-900 ">
            <span className="text-white font-bold uppercase">OumFlavor</span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto ">
            <nav className="flex-1 px-2 py-4 bg-gray-800 ">
              <Link
                href="/dashboard"
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                <MdSpaceDashboard className="h-6 w-6 mr-2" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/dishes"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <GiMeal className="h-6 w-6 mr-2" />
                Dishes
              </Link>
              <Link
                href="/dashboard/reservations"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <SlCalender className="h-6 w-6 mr-2"  />
                Reservations
              </Link>
              <Link
                href="/dashboard/messages"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <MdOutlineMessage className="h-6 w-6 mr-2" />
                Messages
              </Link>
              <Link
                href="/dashboard/add"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <IoAddCircleOutline className="h-6 w-6 mr-2" />
                Add
              </Link>
              <Link
                href="/dashboard/logout"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <MdLogout className="h-6 w-6 mr-2" />
                Log Out
              </Link>
              <UserButton afterSignOutUrl="/" />
            </nav>
          </div>
        </div>

        {/* <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
              <button className="text-gray-500 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <input
                className="mx-4 w-full border rounded-md px-4 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center pr-4">
              <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l-7-7 7-7m5 14l7-7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
            <p className="mt-2 text-gray-600">
              This is an example dashboard using Tailwind CSS.
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
