"use client";

import bgImg from "@/assets/bgImg.jpg";
import { useState } from "react";
import tajineImg from "@/assets/tajine.jpg";
const data = [
  {
    image: tajineImg,
    title: "Tajine",
    ingredients: ["btata", "jalbana", "maticha"],
    price: 50,
  },
];
const MenuPage = () => {
  return (
    <div
      className=" gap-7 justify-center items-center text-white bg-cover pt-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImg.src})`,
      }}
    >
      <div className="flex flex-col w-full items-center justify-center gap-7 mb-11">
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
              id="Appetizers"
              checked
            />

            <label htmlFor="Appetizers">Appetizers</label>
          </li>
          <li className="text-white p-2">
            <input
              type="radio"
              name="categories"
              id="mainDish"
              className="input-radio"
            />
            <label htmlFor="mainDish">Main Dish</label>
          </li>
          <li className="text-white p-2">
            <input
              type="radio"
              name="categories"
              id="Desert"
              className="input-radio"
            />
            <label htmlFor="Desert">Desert</label>
          </li>
          <li className="text-white p-2">
            <input
              type="radio"
              name="categories"
              id="Drinks"
              className="input-radio"
            />
            <label htmlFor="Drinks">Drinks</label>
          </li>
          <li className="text-white p-2">
            <input
              type="radio"
              name="categories"
              id="Cocktails"
              className="input-radio"
            />
            <label htmlFor="Cocktails">Cocktails</label>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 w-[80%]">
          <div className="border border-red-300 p-4">
            <div className="flex flex-col border border-red-600">
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="border border-red-600"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
