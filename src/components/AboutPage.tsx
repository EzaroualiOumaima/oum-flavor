import React from "react";
import Image from "next/image";
import topImg from "@/assets/img1.jpg";
import underImg from "@/assets/img2.jpg";
import bgImg from "@/assets/bgImg.jpg";
const AboutPage = () => {
  return (
    <div
      className="flex items-center justify-between h-screen bg-cover w-full p-28"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7 ), rgba(0, 0, 0, 0.7)), url(${bgImg.src})`,
      }}
    >
      <div className="flex flex-col gap-y-11 w-[50%] text-center ">
        <h1 className=" title-about text-[150px] text-[#C9AB81] ">About Us</h1>

        <p className="text-xl text-white leading-10 font-[Poppins] text-justify">
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
      <div>
        <div className="absolute translate-y-24 -translate-x-[10rem]">
          <Image src={topImg} alt="img1" className="rounded-lg" />
        </div>
        <div>
          <Image src={underImg} alt="img2" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
