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
import { motion } from "framer-motion";
import { IoMdCheckmark } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReviewPage = () => {
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
        className="bg-cover w-full overflow-y-auto  no-scroll-bar h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImg.src})`,
        }}
      >
        <div className=" mt-5  relative overflow-x-auto ">
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
              {reviews.map((review: any, index: number) => (
                <tr key={index} className=" border-b">
                  <td className="px-6 py-4 font-Poppins font-md text-white">
                    <h1 className="w-[150px] whitespace-nowrap overflow-hidden text-ellipsis text-[15px]">
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
    </>
  );
};

export default ReviewPage;
