"use client";

import bgImg from "@/assets/bgImg.jpg";
import { Dish } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { getAllDishes } from "@/store/dishes/dishThunk";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const MenuPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { dishes } = useSelector((state: RootState) => state.dishes);
  const [filteredDishes, setFilteredDishes] = useState(dishes);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    dispatch(getAllDishes());
  }, [dispatch]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  useEffect(() => {
    setFilteredDishes(
      dishes.filter(
        (item: Dish) => item.category.toLocaleLowerCase() === "appetizers"
      )
    );
  }, [dishes]);

  const handleCategoryChange = (category: string, index: number) => {
    setIndex(index);
    console.log("function launched");
    setFilteredDishes(
      dishes.filter(
        (item: Dish) =>
          item.category.toLocaleLowerCase() === category.toLowerCase()
      )
    );
    console.log(filteredDishes);
  };
  return (
    <div
      className=" gap-7 justify-center items-center min-h-screen text-white bg-cover pt-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImg.src})`,
      }}
    >
      <div className="flex flex-col w-full items-center justify-center gap-7 mb-11">
        <h2
          data-aos="fade-up"
          className="font-[JosefinSans] font-semibold italic text-2xl text-[#C9AB81]"
        >
          Special Selection
        </h2>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="font-[CormorantGaramond] text-7xl tracking-wider"
        >
          From Our Menu
        </h1>
        <ul className="flex flex-row gap-36 mt-5 mx-4 text-xl font-[Poppins]">
          <li className="text-white p-2">
            <button
              data-aos="fade-up"
              data-aos-delay="200"
              className={`res-buttons  ${
                index === 1 ? "bg-[#C9AB81]" : "bg-transparent"
              }`}
              onClick={() => handleCategoryChange("Appetizers", 1)}
            >
              Appetizers
            </button>
          </li>
          <li className="text-white p-2">
            <button
              data-aos="fade-up"
              data-aos-delay="300"
              className={` res-buttons ${
                index === 2 ? "bg-[#C9AB81]" : "bg-transparent"
              }`}
              onClick={() => handleCategoryChange("Main Dish", 2)}
            >
              Main Dish
            </button>
          </li>
          <li className="text-white p-2">
            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className={`res-buttons ${
                index === 3 ? "bg-[#C9AB81]" : "bg-transparent"
              }`}
              onClick={() => handleCategoryChange("Dessert", 3)}
            >
              Dessert
            </button>
          </li>
          <li className="text-white p-2">
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className={`res-buttons ${
                index === 4 ? "bg-[#C9AB81]" : "bg-transparent"
              }`}
              onClick={() => handleCategoryChange("Drinks", 4)}
            >
              Drinks
            </button>
          </li>
          <li className="text-white p-2">
            <button
              data-aos="fade-up"
              data-aos-delay="600"
              className={`res-buttons  ${
                index === 5 ? "bg-[#C9AB81]" : "bg-transparent"
              }`}
              onClick={() => handleCategoryChange("Cocktails", 5)}
            >
              Cocktails
            </button>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <div
          // data-aos="fade-in"
          // data-aos-delay="600"
          className="grid grid-cols-2 gap-5 w-[80%] mb-24"
        >
          <AnimatePresence>
            {filteredDishes.map((dish: Dish, index: number) => (
              <>
                <motion.div
                  key={index}
                  className="p-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  <div className="flex flex-col">
                    <div className=" flex items-center gap-5">
                      <div className="w-[90%] flex items-center gap-3 flex-grow">
                        <h1 className="text-[#C9AB81] text-[1.4rem] uppercase font-semibold font-[Poppins] ">
                          {dish.title}
                        </h1>
                        <div className=" border border-l-transparent border-r-transparent border-t-[#715B3E] border-b-[#715B3E] py-[2px] flex-grow"></div>
                      </div>
                      <div className="w-[10%] flex justify-center">
                        <p className="text-[#C9AB81] font-semibold text-[1.4rem]">
                          {dish.price}Dhs
                        </p>
                      </div>
                    </div>
                    <div>
                      <h1 className="ingredients italic text-xl">
                        {dish.ingredients}
                      </h1>
                    </div>
                  </div>
                </motion.div>
              </>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
