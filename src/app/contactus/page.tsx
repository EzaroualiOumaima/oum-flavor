"use client";

import React, { useEffect, useState } from "react";
import conatctImg from "@/assets/contact.jpg";
import { motion } from "framer-motion";
import bgImg from "@/assets/bgImg.jpg";
import { sendMail } from "@/actions/mail";
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "@/store/contacts/contactThunk";
import { AppDispatch, RootState } from "@/store/store";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  const dispatch = useDispatch<AppDispatch>();
  const contacts = useSelector((state: RootState) => state.contacts);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    from: "",
    name: "",
    subject: "",
    body: "",
  });

  async function handleSubmit(event: any) {
    event.preventDefault();
    setIsDisabled(true);
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (
      formData.name &&
      formData.body &&
      formData.from &&
      emailRegex.test(formData.from)
    ) {
      await dispatch(
        addContacts({
          name: formData.name,
          email: formData.from,
          message: formData.body,
        })
      );
      console.log("sent to db");
      await sendMail(formData);
      setIsSent(true);
      setFormData({
        from: "",
        name: "",
        subject: "welcome to oum flavor",
        body: "",
      });
      setTimeout(() => {
        setIsSent(false);
      }, 2500);
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
      return alert("please complete the form");
    }
    // console.log("handle Submit Launched");
  }

  return (
    <>
      <div
        className="w-full h-[80vh] md:h-screen flex items-center justify-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5 ), rgba(0, 0, 0, 0.4)), url(${conatctImg.src})`,
          backgroundPosition: "center",
        }}
      >
        <h1 className=" text-5xl md:text-7xl tracking-wider font-bold text-white font-[JosefinSans]">
          CONTACT US
        </h1>
      </div>
      <div
        className="flex flex-col md:flex md:flex-row items-center justify-center gap-10 text-white py-32 bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6 ), rgba(0, 0, 0, 0.6)), url(${bgImg.src})`,
        }}
      >
        <div className="flex flex-col px-8 items-center md:items-start gap-3 w-full md:w-5/12">
          <h1
            data-aos="fade-up-right"
            className=" title-contact text-[55px] text-center md:text-8xl font-semibold text-[#C9AB81] "
          >
            __Write to Us__
          </h1>
          <div
            data-aos="fade-up-right"
            data-aos-delay="100"
            className="flex flex-col gap-3"
          >
            <p className="contact-p ">
              All comments & questions are welcome. <br />
            </p>
            <p className="contact-p">
              {" "}
              Please email us:{" "}
              <span className="text-white/75">oumflavor@gmail.com</span>
            </p>
            <p className="contact-p">
              Reserve by email:{" "}
              <span className="text-white/75">oumflavor@gmail.com</span>
              <br />
            </p>
            <p className="contact-p ">
              Tel : <span className="text-white/75">+212 6 89 25 65 61</span>{" "}
              <br />{" "}
            </p>
            <h2 className="contact-p font-bold tracking-wide underline mt-4">
              OPENING HOURS:
            </h2>
            <p className="contact-p">Mon – Thu: 11.00 am – 01:00 am</p>
            <p className="contact-p">Fri – Sun: 11:00 am – 02:00 am</p>
          </div>
        </div>
        <form className="flex flex-col items-start gap-10 w-[95%] md:w-6/12">
          <input
            data-aos="fade-up"
            data-aos-delay="200"
            className="h-16 md:h-20 outline-none w-full bg-slate-700 border border-[#C9AB81] pl-5 rounded placeholder:text-slate-400 "
            type="text"
            required
            placeholder="Your Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            data-aos="fade-up"
            data-aos-delay="300"
            className=" h-16 md:h-20 w-full outline-none border border-[#C9AB81] bg-slate-700 pl-5 rounded placeholder:text-slate-400 "
            type="text"
            placeholder="Your Email *"
            required
            value={formData.from}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          />
          <textarea
            data-aos="fade-up"
            data-aos-delay="400"
            placeholder="Your Message *"
            required
            className="h-24 outline-none w-full border border-[#C9AB81] bg-slate-700 pl-5 pt-3 rounded placeholder:text-slate-400"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          ></textarea>
          <div className="flex items-center gap-5 ">
            <div data-aos="fade-up" data-aos-delay="500">
              <button
                onClick={handleSubmit}
                disabled={isDisabled}
                className={`w-[150px] bg-transparent border border-[#C9AB81] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#C9AB81] before:to-[#d3b182] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-xl font-[Poppins] text-[#fff] ${ isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
                // className={`text-xl font-[Poppins]  text-white bg-[#C9AB81] rounded border border-[#C9AB81] px-6 py-3  hover:scale-110 duration-500 ${
                //   isDisabled ? "cursor-not-allowed" : "cursor-pointer"
                // }`}
              >
                Send
              </button>
            </div>
            {isSent && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <p className="text-green-600 text-lg">Message sent !</p>
                </motion.div>
              </>
            )}
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default ContactPage;
