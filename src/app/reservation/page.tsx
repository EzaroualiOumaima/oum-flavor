"use client";
import reservationImg from "@/assets/reservationImg.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgImg from "@/assets/bgImg.jpg";
import { FormEvent, useEffect, useState } from "react";
// import { Reservation } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { addReservations } from "@/store/reservation/reservationThunk";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const reservations = useSelector((state: RootState) => state.reservations);

  const [minDate, setMinDate] = useState("");
  const [instructions, setInstructions] = useState({
    name: "",
    email: "",
    phone: "",
    reservationDate: getCurrentDate(),
    reservationTime: "11",
    numberOfPeople: 1,
    specialRequests: "",
  });

  console.log(reservations);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setInstructions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangePhone = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    // Validation pour le champ de téléphone
    if (name === "phone") {
      // Ne met à jour la valeur que si elle contient au plus 10 chiffres
      if (/^\d{0,10}$/.test(value)) {
        setInstructions({ ...instructions, [name]: value });
      }
    } else {
      // Pour les autres champs, met à jour la valeur normalement
      setInstructions({ ...instructions, [name]: value });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(instructions);
    if (
      instructions.name &&
      instructions.phone &&
      instructions.email &&
      instructions.numberOfPeople !== 0 &&
      instructions.reservationDate &&
      instructions.reservationTime
    ) {
      console.log("THIS IS THE INSTRUCTIONS: " + instructions);
      dispatch(
        addReservations({
          name: instructions.name,
          email: instructions.email,
          phone: instructions.phone,
          reservationDate: instructions.reservationDate,
          reservationTime: instructions.reservationTime,
          numberOfPeople: Number(instructions.numberOfPeople),
          specialRequests: instructions.specialRequests,
        })
      );

      // Resetting the instructions state to clear the input fields
      setInstructions({
        name: "",
        email: "",
        phone: "",
        reservationDate: getCurrentDate(),
        reservationTime: "",
        numberOfPeople: 1,
        specialRequests: "",
      });

      return toast.success("Data Submitted");
    }
    return toast.error("Data Failed");
  };

  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    setMinDate(getCurrentDate());
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full mt-16 px-12"
        >
          <div className="grid grid-cols-3 gap-20 ">
            <select
              name="numberOfPeople"
              value={instructions.numberOfPeople}
              onChange={handleChange}
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
            <input
              type="date"
              name="reservationDate"
              value={
                instructions.reservationDate
                  ? instructions.reservationDate
                  : getCurrentDate()
              }
              onChange={handleChange}
              min={minDate}
              className=" h-[3rem] font-[Poppins]  text-lg bg-transparent border-b-2  text-white  focus:outline-none  focus:border-[#C9AB81]"
            />
            <select
              name="reservationTime"
              value={instructions.reservationTime}
              onChange={handleChange}
              className="  h-[3rem] text-lg font-[Poppins]  text-white bg-transparent border-0 border-b-2 border-gray-100    focus:outline-none focus:border-[#C9AB81]"
            >
              <option className="text-slate-900" value="11">
                11:00 AM
              </option>
              <option className="text-slate-900" value="12">
                12:00 AM
              </option>
              <option className="text-slate-900" value="13">
                1:00 PM
              </option>
              <option className="text-slate-900" value="14">
                2:00 PM
              </option>
              <option className="text-slate-900" value="15">
                3:00 PM
              </option>
              <option className="text-slate-900" value="16">
                4:00 PM
              </option>
              <option className="text-slate-900" value="17">
                5:00 PM
              </option>
              <option className="text-slate-900" value="18">
                6:00 PM
              </option>
              <option className="text-slate-900" value="19">
                7:00 PM
              </option>
              <option className="text-slate-900" value="20">
                8:00 PM
              </option>
              <option className="text-slate-900" value="21">
                9:00 PM
              </option>
              <option className="text-slate-900" value="22">
                10:00 PM
              </option>
              <option className="text-slate-900" value="23">
                11:00 PM
              </option>
              <option className="text-slate-900" value="00">
                12:00 PM
              </option>
            </select>

            <input
              type="text"
              name="name"
              value={instructions.name}
              onChange={handleChange}
              placeholder="Your Name"
              className=" h-[3rem] font-[Poppins]  placeholder:text-white text-lg   text-white bg-transparent border-0 border-b-2  focus:outline-none  focus:border-[#C9AB81]"
            />
            <input
              type="email"
              name="email"
              value={instructions.email}
              onChange={handleChange}
              placeholder="Email"
              className=" h-[3rem] font-[Poppins]  placeholder:text-white text-lg   text-white bg-transparent border-0 border-b-2    focus:outline-none  focus:border-[#C9AB81] "
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={instructions.phone}
              onChange={handleChangePhone}
              className=" h-[3rem] font-[Poppins]  placeholder:text-white text-lg   text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none   focus:outline-none  focus:border-[#C9AB81] "
            />
            <textarea
              name="specialRequests"
              value={instructions.specialRequests}
              onChange={handleChange}
              placeholder="Special Requests"
              className=" col-span-3 h-[7rem] font-[Poppins]  placeholder:text-white text-lg   text-white bg-transparent border-0 border-b-2 border-gray-100  focus:outline-none focus:border-[#C9AB81]"
            />
          </div>
          <div className="w-full justify-center flex mt-5">
            <button className="text-lg  font-[Poppins] font-semibold text-white  bg-[#C9AB81] border border-[#C9AB81] px-6 py-3 hover:-mt-1 duration-700">
              BOOK A TABLE NOW
            </button>
          </div>
          <div>{/* {reservations.error} */}</div>
        </form>
      </div>
    </>
  );
};

export default Page;
