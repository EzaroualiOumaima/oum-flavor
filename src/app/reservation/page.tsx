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
import checkmark from "@/lotieAnimations/checkmark.json";
import Lottie from "lottie-react";
import { addReviews } from "@/store/reviews/reviewThunk";
import AOS from "aos";
import "aos/dist/aos.css";
import { sendMail } from "@/actions/mailReservation";

const ReservationPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const reservations = useSelector((state: RootState) => state.reservations);
  const reviews = useSelector((state: RootState) => state.reviews);

  const [minDate, setMinDate] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [instructions, setInstructions] = useState({
    name: "",
    email: "",
    phone: "",
    reservationDate: getCurrentDate(),
    reservationTime: "11",
    numberOfPeople: 1,
    specialRequests: "",
  });
  const [formdataReview, setFormdataReview] = useState({
    name: "",
    message: "",
  });

  // console.log(reservations);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

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
      try {
        await sendMail({
          from: instructions.email,
          name: instructions.name,
          subject: "Reservation Confirmation",
          body: "Your reservation has been confirmed.",
        });

        // await sendMail({
        //   from: "oumflavor@gmail.com",
        //   name: "OumFlavor",
        //   subject: "New Reservation",
        //   body: `You have received a new reservation from ${instructions.name}.`,
        // });

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

        return setIsShown(true);
      } catch (error) {
        console.error("Error sending emails: ", error);
        toast.error("Failed to send confirmation emails.");
      }
    } else {
      toast.error("Data Failed");
    }
  };
  // add reviews
  const handleSendFeedback = (e: FormEvent) => {
    console.log("Send button clicked");
    e.preventDefault();
    dispatch(
      addReviews({
        name: formdataReview.name,
        message: formdataReview.message,
      })
    );

    setFormdataReview({
      name: "",
      message: "",
    });
    setIsAlertShown(true);
    console.log("isAlertShown:", isAlertShown);
  };
  // alert("data sent");
  // console.log(formdataReview);

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
        className="w-full h-[55vh]  md:h-screen flex items-center justify-center bg-cover "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1 ), rgba(0, 0, 0, 0.2)), url(${reservationImg.src})`,
          backgroundPosition: "bottom center",
          
        }}
      >
        <h1 className="text-3xl md:text-6xl tracking-wider font-bold text-white font-[JosefinSans]">
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
          <h2
            data-aos="fade-up"
            className="font-[JosefinSans] text-2xl font-semibold italic text-[#C9AB81]"
          >
            Online Reservation
          </h2>
          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className=" font-[CormorantGaramond] text-5xl md:text-7xl tracking-wider  "
          >
            Book A Table
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="250"
            className="font-[Poppins] text-center text-lg md:text-xl  leading-7"
          >
            OumFlavor is available nightly for group reservations small and
            large. <br />
            Ready to secure your spot for a delightful dining experience? Fill
            out the form below to reserve a table at OumFlavor
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-6 ${
            isShown ? "w-full md:w-[85%]" : "w-full"
          } mt-16 px-6 md:px-12`}
        >
          {isShown ? (
            <div className=" flex-col md:flex-row w-full py-4 flex items-center justify-center  gap-10 md:gap-20  ">
              <div data-aos="fade-up" className="flex flex-col gap-5 pt-7">
                <h1 className="font-[CormorantGaramond] text-3xl md:text-5xl tracking-wider text-gray-100 leading-[5rem]  text-center ">
                  Thank you for your reservation, <br />
                  we&apos;ll contact you soon !
                </h1>
                <div className="w-full flex items-center justify-center">
                  <Lottie
                    animationData={checkmark}
                    className="h-[5rem] w-[5rem] "
                    loop={false}
                  />
                </div>
              </div>
              <form
                data-aos="fade-up"
                data-aos-delay="100"
                className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg p-6"
              >
                <h2 className=" mb-3 font-[CormorantGaramond]  text-2xl text-center  text-white">
                  Your Feedback
                </h2>
                <p className="mb-4 leading-relaxed text-gray-300 ">
                  If you had any issues or you liked our service, please share
                  with us!
                </p>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="text-sm leading-7 text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="text"
                    name="text"
                    value={formdataReview.name}
                    onChange={(e) =>
                      setFormdataReview({
                        ...formdataReview,
                        name: e.target.value,
                      })
                    }
                    className="w-full rounded border  py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#C9AB81] focus:ring-1 focus:ring-[#bdbab6]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="text-sm leading-7 text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formdataReview.message}
                    onChange={(e) =>
                      setFormdataReview({
                        ...formdataReview,
                        message: e.target.value,
                      })
                    }
                    className="h-24 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#C9AB81] focus:ring-1 focus:ring-[#bdbab6]"
                  ></textarea>
                </div>
                <button
                  onClick={handleSendFeedback}
                  className="rounded border-0 bg-[#C9AB81] py-2 px-6 text-lg text-white hover:bg-[#d6b27f] focus:outline-none"
                >
                  Send
                </button>
                <p className="mt-4 text-xs text-gray-400 text-center">
                  Feel free to connect with us on social media platforms.
                </p>
              </form>
            </div>
          ) : (
            <>
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-20 "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <select
                  name="numberOfPeople"
                  value={instructions.numberOfPeople}
                  onChange={handleChange}
                  // data-aos="fade-up"
                  // data-aos-delay="400"
                  className=" h-[3rem] text-lg  font-[Poppins]  text-white bg-transparent border-0 border-b-2 focus:outline-none focus:border-[#C9AB81] "
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
                  // data-aos="fade-up"
                  // data-aos-delay="500"
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
                  placeholder="Name *"
                  required
                  className=" h-[3rem] font-[Poppins]  placeholder:text-white text-lg   text-white bg-transparent border-0 border-b-2  focus:outline-none  focus:border-[#C9AB81]"
                />
                <input
                  type="email"
                  name="email"
                  value={instructions.email}
                  required
                  onChange={handleChange}
                  placeholder="Email *"
                  className=" h-[3rem] font-[Poppins]  placeholder:text-white text-lg  text-white bg-transparent border-0 border-b-2    focus:outline-none  focus:border-[#C9AB81] "
                />
                <input
                  type="text"
                  placeholder="Phone *"
                  name="phone"
                  required
                  value={instructions.phone}
                  onChange={handleChangePhone}
                  className=" h-[3rem] font-[Poppins]  placeholder:text-white text-lg  text-white bg-transparent border-0 border-b-2 border-gray-100 appearance-none   focus:outline-none  focus:border-[#C9AB81] "
                />
                <textarea
                  name="specialRequests"
                  value={instructions.specialRequests}
                  onChange={handleChange}
                  placeholder="Special Requests"
                  className=" col-span-1 md:col-span-3 h-[7rem] font-[Poppins]  placeholder:text-white text-lg   text-white bg-transparent border-0 border-b-2 border-gray-100  focus:outline-none focus:border-[#C9AB81]"
                />
              </div>
              <div className="w-full justify-center flex mt-5 ">
                <button
                  data-aos="fade-up"
                  data-aos-delay="350"
                  className="text-lg  font-[Poppins] font-semibold text-white  bg-[#C9AB81] border border-[#C9AB81] px-6 py-3 hover:bg-[#b49365]   hover:scale-110 duration-500 rounded-sm "
                >
                  BOOK A TABLE NOW
                </button>
              </div>
            </>
          )}
        </form>
      </div>
      {isAlertShown && (
        <div
          data-aos="zoom-in"
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-80"
        >
          <div className=" p-8 rounded-lg flex  bg-gray-800 flex-col gap-3 justify-center items-center w-96">
            <Lottie
              animationData={checkmark}
              className="h-[4rem] w-[4rem] "
              loop={false}
            />
            <p className="text-lg text-center  text-white">
              Feedback sent successfully!
            </p>
            <button
              className=" w-full mt-4 px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={() => setIsAlertShown(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationPage;
