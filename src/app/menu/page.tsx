"use client";

import bgImg from "@/assets/bgImg.jpg";
import { useState } from "react";

const MenuPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };

  return (
    <div
      className="flex h-screen gap-7 justify-center items-center text-white bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImg.src})`,
      }}
    >
      <div className="flex flex-col w-full items-center justify-center gap-7">
        <h2 className="font-[JosefinSans] font-semibold italic text-2xl text-[#C9AB81]">
          Special Selection
        </h2>
        <h1 className="font-[CormorantGaramond] text-7xl tracking-wider">
          From Our Menu
        </h1>
        <ul className="flex flex-row gap-40 mt-12 text-xl font-[Poppins]">
          <li className="text-white p-2">
            <input
              type="radio"
              name="categories"
              value="Appetizers"
              className="input-radio"
              onChange={handleChange}
              checked={selectedOption === "Appetizers"}
            />

            <label htmlFor="mainDish">Appetizers</label>
          </li>
          <li className="text-white p-2">
            <input
              type="radio"
              name="categories"
              value="Main Dish"
              className="input-radio"
              onChange={handleChange}
              checked={selectedOption === "Main Dish"}
            />
            <label htmlFor="mainDish">Main Dish</label>
          </li>
          <li className="text-white p-2">
            <input
              type="radio"
              name="categories"
              value="Desert"
              className="input-radio"
              onChange={handleChange}
              checked={selectedOption === "Desert"}
            />
            <label htmlFor="mainDish">Desert</label>
          </li>
          <li className="text-white p-2">
            <input
              type="radio"
              name="categories"
              value="Drinks"
              className="input-radio"
              onChange={handleChange}
              checked={selectedOption === "Drinks"}
            />
            <label htmlFor="mainDish">Drinks</label>
          </li>
          <li className="text-white p-2">
            <input
              type="radio"
              name="categories"
              value="Cocktails"
              className="input-radio"
              onChange={handleChange}
              checked={selectedOption === "Cocktails"}
            />
            <label htmlFor="mainDish">Cocktails</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuPage;
