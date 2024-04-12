import Link from "next/link";
import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { UserButton } from "@clerk/nextjs";
import { SlCalender } from "react-icons/sl";
import { VscFeedback } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className=" md:flex flex-col w-64 bg-gray-100">
          <div className="flex items-center justify-center h-16 bg-[#C9AB81] ">
            <span className="text-white font-bold uppercase  text-xl">
              OumFlavor
            </span>
          </div>
          <div className="flex flex-col flex-1  relative  ">
            <nav className="flex-1 px-3 py-10 bg-gray-900 ">
              {/* <Link
                href="/dashboard"
                className="flex items-center px-4 py-2 text-lg text-gray-100 hover:bg-gray-700"
              >
                <MdSpaceDashboard className="h-6 w-6 mr-2" />
                Dashboard
              </Link> */}
              <Link
                href="/dashboard/dishes"
                className="flex items-center px-4 py-2 mt-6 text-lg text-gray-100 hover:bg-gray-700"
              >
                <GiMeal className="h-6 w-6 mr-2" />
                Dishes
              </Link>
              <Link
                href="/dashboard/reservations"
                className="flex items-center px-4 py-2 mt-6 text-lg text-gray-100 hover:bg-gray-700"
              >
                <SlCalender className="h-6 w-6 mr-2" />
                Reservations
              </Link>
              <Link
                href="/dashboard/messages"
                className="flex items-center px-4 py-2 mt-6 text-lg text-gray-100 hover:bg-gray-700"
              >
                <MdOutlineMessage className="h-6 w-6 mr-2" />
                Messages
              </Link>
              <Link
                href="/dashboard/reviews"
                className="flex items-center px-4 py-2 mt-6 text-gray-100 text-lg hover:bg-gray-700"
              >
                <VscFeedback className="h-6 w-6 mr-2" />
                Reviews
              </Link>
              <Link
                href="/dashboard/add"
                className="flex items-center px-4 py-2 mt-6 text-gray-100 text-lg hover:bg-gray-700"
              >
                <IoAddCircleOutline className="h-6 w-6 mr-2" />
                Add
              </Link>

              <div className="absolute bottom-5 left-6">
                <UserButton afterSignOutUrl="/" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
