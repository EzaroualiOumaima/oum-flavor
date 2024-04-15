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
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    from: "",
    name: "",
    subject: "",
    body: "",
  });

  async function handleSubmit(event: any) {
    event.preventDefault();
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
    } else {
      return alert("please complete the form");
    }
    // console.log("handle Submit Launched");
  }

  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5 ), rgba(0, 0, 0, 0.4)), url(${conatctImg.src})`,
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-7xl tracking-wider font-bold text-white font-[JosefinSans]">
          CONTACT US
        </h1>
      </div>
      <div
        className="flex items-center justify-center gap-10 text-white py-32 bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6 ), rgba(0, 0, 0, 0.6)), url(${bgImg.src})`,
        }}
      >
        <div className="flex flex-col px-8 items-start gap-3 w-5/12">
          <h1
            data-aos="fade-up-right"
            className=" title-contact text-8xl font-semibold text-[#C9AB81] "
          >
            __Write to Us__
          </h1>
          <div
            data-aos="fade-up-right"
            data-aos-delay="100"
            className="flex flex-col gap-3"
          >
            <p className="contact-p">
              All comments & questions are welcome. <br />
            </p>
            <p className="contact-p">
              {" "}
              Please email us:{" "}
              <span className="hover:text-[#C9AB81] hover:font-semibold hover:cursor-pointer">
                oumflavor@gmail.com
              </span>
            </p>
            <p className="contact-p">
              Reserve by email:{" "}
              <span className="hover:text-[#C9AB81] hover:font-semibold hover:cursor-pointer">
                oumflavor@gmail.com
              </span>
              <br />
            </p>
            <p className="contact-p">
              Tel : +212 6 89 25 65 61 <br />{" "}
            </p>
            <h2 className="contact-p font-bold tracking-wide underline mt-4">
              OPENING HOURS:
            </h2>
            <p className="contact-p">Mon – Thu: 11.00 am – 01:00 am</p>
            <p className="contact-p">Fri – Sun: 11:00 am – 02:00 am</p>
          </div>
        </div>
        <form className="flex flex-col items-start gap-10 w-6/12">
          <input
            data-aos="fade-up"
            data-aos-delay="200"
            className="h-20 outline-none w-full bg-slate-700 border border-[#C9AB81] pl-5 rounded placeholder:text-slate-400 "
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            data-aos="fade-up"
            data-aos-delay="300"
            className="h-20 w-full outline-none border border-[#C9AB81] bg-slate-700 pl-5 rounded placeholder:text-slate-400 "
            type="text"
            placeholder="Your Email"
            value={formData.from}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          />
          <textarea
            data-aos="fade-up"
            data-aos-delay="400"
            placeholder="Your Message"
            className="h-24 outline-none w-full border border-[#C9AB81] bg-slate-700 pl-5 pt-3 rounded placeholder:text-slate-400"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          ></textarea>
          <div className="flex items-center gap-5">
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              onClick={handleSubmit}
              className="text-xl font-[Poppins]  text-white bg-[#C9AB81] rounded border border-[#C9AB81] px-6 py-3  hover:scale-110 duration-500"
            >
              Send
            </button>
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
    </>
  );
};

export default ContactPage;
