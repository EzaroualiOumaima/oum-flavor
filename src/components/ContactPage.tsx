import React from "react";
import conatctImg from "@/assets/contact.jpg";
import bgImg from "@/assets/bgImg.jpg";
const ContactPage = () => {
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
          <h1 className=" title-contact text-8xl font-semibold text-[#C9AB81] ">
            __Write to Us__
          </h1>
          <div className="flex flex-col gap-3">
            <p className="contact-p">
              All comments & questions are welcome. <br />
            </p>
            <p className="contact-p">
              {" "}
              Please email us:{" "}
              <span className="hover:text-[#C9AB81] hover:font-semibold hover:cursor-pointer">
                oumFlavor@gmail.com
              </span>
            </p>
            <p className="contact-p">
              Reserve by email:{" "}
              <span className="hover:text-[#C9AB81] hover:font-semibold hover:cursor-pointer">
                bookingFlavor@gmail.com
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
            className="h-20 outline-none w-full bg-slate-700 border border-[#C9AB81] pl-5 rounded placeholder:text-slate-400 "
            type="text"
            placeholder="Your Name"
          />
          <input
            className="h-20 w-full outline-none border border-[#C9AB81] bg-slate-700 pl-5 rounded placeholder:text-slate-400 "
            type="text"
            placeholder="Your Email"
          />
          <textarea
            placeholder="Your Message"
            className="h-24 outline-none w-full border border-[#C9AB81] bg-slate-700 pl-5 pt-3 rounded placeholder:text-slate-400"
          ></textarea>
          <button className="text-xl font-[Poppins] font-semibold text-white bg-[#C9AB81]  border border-[#C9AB81] px-8 py-4 hover:scale-110 duration-500">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
