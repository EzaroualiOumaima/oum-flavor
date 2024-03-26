"use client";
import reservationImg from "@/assets/reservationImg.jpg";
import bgImg from "@/assets/bgImg.jpg";
import { useEffect, useState } from "react";
const Page = () => {
  const [minDate, setMinDate] = useState("");
  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    setMinDate(getCurrentDate());
  },[]);

  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1 ), rgba(0, 0, 0, 0.2)), url(${reservationImg.src})`,
          backgroundPosition: "bottom center",
        }}
      >
        <h1 className="text-6xl tracking-wider font-bold text-white font-[JosefinSans]">
          RESEREVATION
        </h1>
      </div>
      <div
        className="flex  flex-col items-center justify-center gap-7 text-white py-32 bg-cover "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6 ), rgba(0, 0, 0, 0.6)), url(${bgImg.src})`,
        }}
      >
        <div className="flex flex-col gap-6 items-center justify-center w-full">
          <h2 className="font-[JosefinSans] text-2xl font-semibold italic text-[#C9AB81]">
            Online Reservation
          </h2>
          <h1 className=" font-[CormorantGaramond]  text-7xl tracking-wider  ">
            Book A Table
          </h1>
          <p className="font-[Poppins] text-center text-xl leading-7">
            OumFlavor is available nightly for group reservations small and
            large. <br />
            Ready to secure your spot for a delightful dining experience? Fill
            out the form below to reserve a table at OumFlavor
          </p>
        </div>
        <form className="flex flex-col gap-6 w-full mt-16 px-12">
          <div className="grid grid-cols-3 gap-20 ">
            <select className=" h-[3rem] text-lg  font-[Poppins]  text-white bg-transparent border-0 border-b-2    focus:outline-none focus:border-[#C9AB81] ">
              <option className="text-slate-900" value="1P">
                1 Person
              </option>
              <option className="text-slate-900" value="2P">
                2 People
              </option>
              <option className="text-slate-900" value="3P">
                3 People
              </option>
              <option className="text-slate-900" value="4P">
                4 People
              </option>
              <option className="text-slate-900" value="5P">
                5 People
              </option>
              <option className="text-slate-900" value="6P">
                6 People
              </option>
              <option className="text-slate-900" value="7P">
                7 People
              </option>
              <option className="text-slate-900" value="8P">
                8 People
              </option>
              <option className="text-slate-900" value="9P">
                9 People
              </option>
              <option className="text-slate-900" value="10P">
                10 People
              </option>
            </select>
            <input
              type="date"
              value={getCurrentDate()}
              min={minDate}
              className=" h-[3rem] font-[Poppins]  text-lg bg-transparent border-b-2  text-white   focus:outline-none  focus:border-[#C9AB81]"
            />
            <select className="  h-[3rem] text-lg font-[Poppins]  text-white bg-transparent border-0 border-b-2 border-gray-100    focus:outline-none focus:border-[#C9AB81]">
              <option className="text-slate-900" value="11">
                11:00 AM
              </option>
              <option className="text-slate-900" value="12">
                12:00 AM
              </option>
              <option className="text-slate-900" value="1">
                1:00 PM
              </option>
              <option className="text-slate-900" value="2">
                2:00 PM
              </option>
              <option className="text-slate-900" value="3">
                3:00 PM
              </option>
              <option className="text-slate-900" value="4">
                4:00 PM
              </option>
              <option className="text-slate-900" value="5">
                5:00 PM
              </option>
              <option className="text-slate-900" value="6">
                6:00 PM
              </option>
              <option className="text-slate-900" value="7">
                7:00 PM
              </option>
              <option className="text-slate-900" value="8">
                8:00 PM
              </option>
              <option className="text-slate-900" value="9">
                9:00 PM
              </option>
              <option className="text-slate-900" value="10">
                10:00 PM
              </option>
              <option className="text-slate-900" value="11">
                11:00 PM
              </option>
              <option className="text-slate-900" value="12">
                12:00 PM
              </option>
            </select>

            <input
              type="text"
              placeholder="Your Name"
              className=" h-[3rem] font-[Poppins]  placeholder:text-white text-lg   text-white bg-transparent border-0 border-b-2  focus:outline-none  focus:border-[#C9AB81]"
            />
            <input
              type="text"
              placeholder="Email"
              className=" h-[3rem] font-[Poppins]  placeholder:text-white text-lg   text-white bg-transparent border-0 border-b-2    focus:outline-none  focus:border-[#C9AB81] "
            />
            <input
              type="text"
              placeholder="Phone"
              className=" h-[3rem] font-[Poppins]  placeholder:text-white text-lg   text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none   focus:outline-none  focus:border-[#C9AB81] "
            />
            <textarea
              placeholder="Special Requests"
              className=" col-span-3 h-[7rem] font-[Poppins]  placeholder:text-white text-lg   text-white bg-transparent border-0 border-b-2 border-gray-100  focus:outline-none focus:border-[#C9AB81]"
            />
          </div>
          <div className="w-full justify-center flex mt-5">
            <button className="text-lg  font-[Poppins] font-semibold text-white  bg-[#C9AB81] border border-[#C9AB81] px-6 py-3 hover:-mt-1 duration-700">
              BOOK A TABLE NOW
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
