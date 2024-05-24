"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import topImg from "@/assets/img1.jpg";
import underImg from "@/assets/img2.jpg";
import bgImg from "@/assets/bgImg.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <>
    <div
      className="flex flex-col md:flex-row items-center justify-between h-auto md:h-screen bg-cover w-full md:p-28 pt-36 gap-5 md:gap-0  pb-20 md:pb-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7 ), rgba(0, 0, 0, 0.7)), url(${bgImg.src})`,
      }}
    >
      <div className="flex flex-col w-[90%] md:w-[50%] text-center">
        <h1 className=" title-about text-6xl md:text-[120px] text-[#C9AB81]">
          About Us
        </h1>

        <p
          data-aos="fade-up"
          className="text-xl text-white leading-8 md:leading-10 font-[Poppins] text-justify "
        >
          Welcome to Oum Flavor, where culinary excellence meets convenience.
          Our restaurants name encapsulates the essence of maternal love and the
          rich tapestry of flavors we offer. At Oum Flavor, you can reserve a
          table effortlessly through our online platform, ensuring your dining
          experience is tailored to perfection. Additionally, our seamless
          online ordering system allows you to indulge in our delectable dishes
          from the comfort of your home. Join us at Oum Flavor for a gastronomic
          journey that combines tradition with innovation, all at your
          fingertips.
        </p>
      </div>
      <div className="">
        <div className="absolute z-30 translate-y-24 -translate-x-[10rem] ">
          <Image
            data-aos="fade-up"
            data-aos-delay="200"
            src={topImg}
            alt="img1"
            className="rounded-lg hidden md:block"
          />
        </div>
        <div>
          <Image
            data-aos="fade-left"
            src={underImg}
            alt="img2"
            className="rounded-lg hidden md:block"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;
