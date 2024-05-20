"use client";

import React, { useEffect } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import bgImg from "@/assets/bgImg.jpg";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function InfiniteMovingCardsDemo() {
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
        className="h-screen rounded-md flex flex-col antialiased bg-cover items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5 ), rgba(0, 0, 0, 0.5)), url(${bgImg.src})`,
        }}
      >
        <div className="flex flex-col w-full items-center justify-center gap-9">
          <h2
            data-aos="fade-down"
            data-aos-delay="500"
            className="font-[JosefinSans] font-semibold italic pt-24 md:pt-0 text-2xl text-[#C9AB81]"
          >
            What our customers say
          </h2>
          <h1
            data-aos="fade-down"
            className="font-[CormorantGaramond] text-slate-200 text-center text-4xl md:text-5xl tracking-wider"
          >
            Their Testimonials{" "}
          </h1>
          <InfiniteMovingCards direction="right" speed="slow" />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default InfiniteMovingCardsDemo;
