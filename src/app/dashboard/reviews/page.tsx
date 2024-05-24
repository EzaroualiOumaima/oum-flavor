"use client";
import bgImg from "@/assets/bgImg.jpg";
import {
  deleteReviews,
  getReviews,
  updateReviews,
} from "@/store/reviews/reviewThunk";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCheckmark } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Review } from "@/app/types";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { MdOutlineMessage } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { UserButton } from "@clerk/nextjs";
import { SlCalender } from "react-icons/sl";
import { VscFeedback } from "react-icons/vsc";
import { IoAddCircleOutline } from "react-icons/io5";
import Footer from "@/components/Footer";
const ReviewPage = () => {
  const[openMenu , setOpenMenu] = useState(false)
  const { reviews } = useSelector((state: RootState) => state.reviews);
  const [id, setId] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [openDelete, setOpenDelete] = useState(false);

  const deleteModel = (id: string) => {
    setId(id);
    setOpenDelete(true);
  };

  useEffect(() => {
    const getAllReviews = async () => {
      await dispatch(getReviews());
    };
    getAllReviews();
  }, [dispatch]);

  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteReviews(id));
      await dispatch(getReviews());
      toast.success("Review Deleted");
      setOpenDelete(false);
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  const handleUpdate = async (id: string) => {
    try {
      await dispatch(updateReviews(id));
      await dispatch(getReviews());
      toast.success("Review is showing");
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div
        className="bg-cover w-full  no-scroll-bar min-h-screen relative pt-20 md:pt-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImg.src})`,
        }}
      >
         <RiMenu2Line
          className="h-10 w-10 z-0 absolute top-5 left-4 text-white md:hidden "
          onClick={() => setOpenMenu(true)}
        />
        
        <div className=" mt-5 overflow-x-auto overflow-y-auto z-50 ">
          <table className="w-full text-sm text-left rtl:text-right text-white  overflow-hidden ">
            <thead className="text-xs text-white uppercase ">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 font-Poppins font-bold  text-[#C9AB81]"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-Poppins font-bold  text-[#C9AB81]"
                >
                  Message
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 font-Poppins font-bold  text-[#C9AB81]"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto">
              {reviews
                .slice()
                .reverse()
                .map((review: Review, index: number) => (
                  <tr key={index} className=" border-b">
                    <td className="px-6 py-4 font-Poppins font-md text-white">
                      <h1 className="w-[85px] md:w-[150px] whitespace-nowrap overflow-hidden text-wrap text-[15px]">
                        {review.name}
                      </h1>
                    </td>
                    <td className="px-6 py-4 max-w-[500px] text-wrap whitespace-nowrap  text-[15px] font-Poppins text-white">
                      {review.message}
                    </td>
                    <td className="px-6 py-4 flex gap-4 whitespace-nowrap">
                      <div className="flex gap-5">
                        <IoMdCheckmark
                          onClick={() => handleUpdate(review._id)}
                          className="h-6 w-6 cursor-pointer text-green-500"
                        />
                      </div>
                      <div className="flex gap-5">
                        <RiDeleteBin6Line
                          onClick={() => deleteModel(review._id)}
                          className="h-6 w-6 cursor-pointer text-red-600"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {openDelete && (
          <>
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#000000dd] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: "0.5" }}
                className="p-6 flex flex-col items-center justify-center rounded-lg bg-gray-900 gap-5"
              >
                <h1 className="text-lg text-white">
                  Confirm the deletion of this review?
                </h1>
                <div className="flex gap-4 items-center">
                  <button
                    className="px-4 py-2 bg-red-600 text-white rounded-md"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-4 py-2 bg-transparent border border-white text-white rounded-md"
                    onClick={() => {
                      setOpenDelete(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{
              opacity: 0,
              x: -500,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -500,
            }}
            transition={{
              duration: "0.4",
            }}
            className="bg-gray-900  text-white font-semibold  w-full h-screen flex flex-col items-center justify-between fixed top-0 right-0 left-0 bottom-0 z-50"
          >
            <div className="flex items-center justify-center h-16 w-full  md:w-0 bg-[#C9AB81] ">
              <span className="text-white font-bold uppercase  text-xl">
                OumFlavor
              </span>
            </div>
            <div className="flex flex-col flex-1 relative  ">
              <nav className="flex-1 px-3 py-10 bg-gray-900 ">
                <Link
                  href="/dashboard/dishes"
                  className="flex items-center  px-4 py-2 mt-10 md:mt-6 text-2xl md:text-lg text-gray-100 hover:bg-gray-700"
                >
                  <GiMeal className="h-9 w-9 mr-3 md:h-6 md:w-6 md:mr-2" />
                  Dishes
                </Link>

                <Link
                  href="/dashboard/reservations"
                  className="flex items-center px-4 py-2 mt-10 md:mt-6 text-2xl md:text-lg text-gray-100 hover:bg-gray-700"
                >
                  <SlCalender className="h-9 w-9 mr-3 md:h-6 md:w-6 md:mr-2" />
                  Reservations
                </Link>
                <Link
                  href="/dashboard/messages"
                  className="flex items-center px-4 py-2 mt-10 md:mt-6 text-2xl md:text-lg text-gray-100 hover:bg-gray-700"
                >
                  <MdOutlineMessage className="h-9 w-9 mr-3 md:h-6 md:w-6 md:mr-2" />
                  Messages
                </Link>
                <Link
                  href="/dashboard/reviews"
                  className="flex items-center px-4 py-2 mt-10 md:mt-6 text-gray-100 text-2xl md:text-lg hover:bg-gray-700"
                >
                  <VscFeedback className="h-9 w-9 mr-3 md:h-6 md:w-6 md:mr-2" />
                  Reviews
                </Link>
                <Link
                  href="/dashboard/add"
                  className="flex items-center px-4 py-2 mt-10 md:mt-6 text-gray-100 text-2xl md:text-lg hover:bg-gray-700"
                >
                  <IoAddCircleOutline className="h-9 w-9 mr-3 md:h-6 md:w-6 md:mr-2" />
                  Add
                </Link>

                <div className="absolute -left-8 bottom-9 md:bottom-5  md:left-6">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </nav>
            </div>

            <IoCloseCircleOutline
              className="w-10 h-10 absolute cursor-pointer top-3 right-4 text-white"
              onClick={() => setOpenMenu(false)}
            />
            {/* <div className="flex justify-center items-center gap-5 pb-5">
            <Image src={logo} alt="logo" className="w-14 h-14" />
            <p className="text-white text-lg">O.EZAROUALI</p>
          </div> */}
          </motion.div>
        )}
      </AnimatePresence>
      {/* <Footer/> */}
    </>
  );
};

export default ReviewPage;
