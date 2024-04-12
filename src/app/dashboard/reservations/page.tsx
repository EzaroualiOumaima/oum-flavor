"use client";

import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import bgImg from "@/assets/bgImg.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  getReservations,
  deleteReservations,
  updateReservations,
} from "@/store/reservation/reservationThunk";
import { motion } from "framer-motion";

const PageReservation = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [id, setId] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    numberOfPeople: 1,
    reservationTime: "",
    reservationDate: "",
  });
  const deleteModel = (id: string) => {
    setId(id);
    setOpenDelete(true);
  };

  const updateModel = (item: any) => {
    setFormData({
      id: item._id,
      numberOfPeople: item.numberOfPeople,
      reservationDate: item.reservationDate,
      reservationTime: item.reservationTime,
    });
    setOpenUpdate(true);
  };

  const handleUpdate = async () => {
    try {
      await dispatch(updateReservations(formData));
      dispatch(getReservations());
      setOpenUpdate(false);
      toast.success("Reservation Updated");
    } catch (error) {
      console.error("Error updating reservation:", error);
    }
  };

  const dispatch = useDispatch<AppDispatch>();
  const { reservations } = useSelector(
    (state: RootState) => state.reservations
  );

  useEffect(() => {
    const getAllReservations = async () => {
      await dispatch(getReservations());
    };
    getAllReservations();
  }, [dispatch]);

  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteReservations(id));
      await dispatch(getReservations());
      setOpenDelete(false);
      toast.success("Reservation Deleted");
    } catch (error) {
      console.error("Error deleting reservation:", error);
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
        className=" w-full  overflow-y-auto  no-scroll-bar h-screen bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImg.src})`,
        }}
      >
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 overflow-hidden ">
          <thead className="text-xs uppercase ">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#C9AB81]"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#C9AB81] "
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#C9AB81]"
              >
                Phone
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#C9AB81]"
              >
                Reservation Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#C9AB81]"
              >
                Reservation Time
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#C9AB81]"
              >
                Number Of People
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#C9AB81]"
              >
                Special Requests
              </th>

              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#C9AB81]"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto text-[14px] font-Poppins text-white">
            {reservations.map((reservation: any, index: number) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "even:bg-gray-50 even:dark:bg-gray-800" : ""
                } border-b dark:border-gray-700`}
              >
                <td className="px-6 py-4 font-Poppins font-md">
                  <h1 className="w-[140px] whitespace-nowrap overflow-hidden text-ellipsis text-[14px]">
                    {reservation.name}
                  </h1>
                </td>
                <td className=" px-6 py-4 whitespace-nowrap w-60">
                  {reservation.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {reservation.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {reservation.reservationDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {reservation.reservationTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {reservation.numberOfPeople}
                </td>
                <td className="px-6 py-4 whitespace-nowrap  ">
                  <h1 className="w-32 overflow-hidden text-wrap ">
                    {reservation.specialRequests}
                  </h1>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-3">
                    <MdEditSquare
                      onClick={() => updateModel(reservation)}
                      className="cursor-pointer h-6 w-6 text-blue-600"
                    />

                    <RiDeleteBin6Line
                      onClick={() => deleteModel(reservation._id)}
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
          <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#000000ac] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: "0.5" }}
              className="p-6 flex flex-col items-center justify-center rounded-lg bg-gray-900 px-6 gap-5"
            >
              <h1 className="text-lg text-white">
                Confirm the deletion of this reservation?
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

      {openUpdate && (
        <>
          <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#000000ac] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: "0.5" }}
              className="bg-gray-900 w-[30rem] p-6 rounded-md flex flex-col gap-5 text-white"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="">Reservation Date</label>
                <input
                  type="date"
                  className="w-full bg-gray-900 rounded-md border-gray-900 text-white px-2 py-3"
                  value={formData.reservationDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      reservationDate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Number Of People</label>
                <select
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      numberOfPeople: Number(e.target.value),
                    })
                  }
                  className=" h-[3rem] text-lg  font-[Poppins]  text-white bg-transparent border-0 border-b-2    focus:outline-none focus:border-[#C9AB81] "
                >
                  <option className="text-slate-900" value={1}>
                    1 Person
                  </option>
                  <option className="text-slate-900" value={2}>
                    2 People
                  </option>
                  <option className="text-slate-900" value={3}>
                    3 People
                  </option>
                  <option className="text-slate-900" value={4}>
                    4 People
                  </option>
                  <option className="text-slate-900" value={5}>
                    5 People
                  </option>
                  <option className="text-slate-900" value={6}>
                    6 People
                  </option>
                  <option className="text-slate-900" value={7}>
                    7 People
                  </option>
                  <option className="text-slate-900" value={8}>
                    8 People
                  </option>
                  <option className="text-slate-900" value={9}>
                    9 People
                  </option>
                  <option className="text-slate-900" value={10}>
                    10 People
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Reservation Time</label>
                <select
                  name="reservationTime"
                  value={formData.reservationTime}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      reservationTime: e.target.value,
                    })
                  }
                  className="h-[3rem] text-lg font-[Poppins] text-white bg-transparent border-0 border-b-2 border-gray-100 focus:outline-none focus:border-[#C9AB81]"
                >
                  {/* {[...Array(12)].map((_, index) => {
                    const hour = index === 0 ? 12 : index;
                    const amPm = index < 12 ? "AM" : "PM";
                    const value = index.toString().padStart(2, "0");
                    return (
                      <option
                        key={hour}
                        className="text-slate-900"
                        value={value}
                      >
                        {hour}:{index === 0 ? "00" : "00"} {amPm}
                      </option>
                    );
                  })} */}
                  {[...Array(13)].map((_, index) => {
                    const hour = index + 11 <= 12 ? index + 11 : index - 1;
                    const amPm = index < 12 ? "AM" : "PM";
                    const value = hour.toString().padStart(2, "0");
                    return (
                      <option
                        key={index}
                        className="text-slate-900"
                        value={value}
                      >
                        {hour === 0 ? 12 : hour}:{index === 0 ? "00" : "00"}{" "}
                        {amPm}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="flex gap-4 items-center justify-center">
                <button
                  className="px-4 py-2 bg-[#2de000] text-white rounded-md hover:scale-110 duration-500"
                  onClick={() => handleUpdate()}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-transparent border border-white text-white rounded-md hover:scale-110 duration-500"
                  onClick={() => {
                    setOpenUpdate(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
};

export default PageReservation;
