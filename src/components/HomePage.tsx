"use client";

import React, { useEffect } from "react";
import image1 from "@/assets/image1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <div>
      <div
        data-testid="background-image"
        className=" flex flex-col items-center justify-center h-screen bg-cover gap-4  w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6 ), rgba(0, 0, 0, 0.6)), url(${image1.src})`,
        }}
      >
        <h1 className="title italic text-[3.2rem] md:text-[8.5rem] text-center mx-4">Welcome to Oum Flavor</h1>
        <p className="text-white text-center text-[18px] md:text-2xl mx-4 mt-4  font-[JosefinSans] italic md:-mt-10">
          The culinary expert that your fine dining restaurant has been waiting{" "}
          <br />
          for. Set the table for a successful online venture with ease We!{" "}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
