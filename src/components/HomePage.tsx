import React from "react";
import image1 from "@/assets/image1.jpg";

const HomePage = () => {
  return (
    <div>
      <div
        data-testid="background-image"
        className=" flex flex-col items-center justify-center h-screen bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6 ), rgba(0, 0, 0, 0.6)), url(${image1.src})`,
        }}
      >
        <h1 className="title text-[8.5rem] italic">Welcome to Oum Flavor</h1>
        <p className="text-white text-center text-2xl font-[JosefinSans] italic -mt-10">
          The culinary expert that your fine dining restaurant has been waiting{" "}
          <br />
          for. Set the table for a successful online venture with ease We!{" "}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
