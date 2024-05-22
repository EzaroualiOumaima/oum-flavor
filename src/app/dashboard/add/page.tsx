"use client";

import { addDishes } from "@/store/dishes/dishThunk";
import { AppDispatch, RootState } from "@/store/store";
import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bgImg from "@/assets/bgImg.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { MdOutlineMessage } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { UserButton } from "@clerk/nextjs";
import { SlCalender } from "react-icons/sl";
import { VscFeedback } from "react-icons/vsc";
import { IoAddCircleOutline } from "react-icons/io5";

const AddDish = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const dishes = useSelector((state: RootState) => state.dishes);
  const [credentials, setCredentials] = useState({
    category: "Appetizers",
    title: "",
    ingredients: "",
    price: 0,
  });

  // console.log(dishes);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    dispatch(
      addDishes({
        category: credentials.category,
        title: credentials.title,
        price: credentials.price,
        ingredients: credentials.ingredients,
      })
    );

    setCredentials({
      title: "",
      category: "",
      ingredients: "",
      price: 0,
    });
    // console.log(credentials);
    // alert("data sent");
    toast.success("Dish Added");
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        className=" bg-cover w-full flex items-center justify-center relative pt-20 md:pt-0   "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImg.src})`,
        }}
      >
        <RiMenu2Line
          className="h-10 w-10 absolute top-5 left-4 text-white md:hidden "
          onClick={() => setOpenMenu(true)}
        />

        <div className="border-4 rounded-lg w-[95%] md:w-[90%]  ">
          <div className="flex items-center justify-center p-5 border-b">
            <h3 className="text-3xl font-medium  font-[Poppins] text-white">
              Add Dish
            </h3>
          </div>

          <div className="p-6 space-y-6">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 ">
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="dish-name"
                    className="text-lg md:text-sm font-medium text-white block mb-2"
                  >
                    Dish Name
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className=" border-2 h-14 focus:border-[#C9AB81]  text-gray-900  text-lg md:text-sm rounded-lg w-full p-2.5 outline-none"
                    placeholder="Title"
                    value={credentials.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="category"
                    className=" text-lg md:text-sm font-medium text-white block mb-2"
                  >
                    Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    value={credentials.category}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border h-14 focus:border-[#C9AB81] outline-none border-gray-300 text-gray-900   text-lg md:text-sm rounded-lg  w-full p-2.5"
                    required
                  >
                    <option value="Appetizers">Appetizers</option>
                    <option value="Main Dish">Main Dish</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Cocktails">Cocktails</option>
                  </select>
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="price"
                    className=" text-lg md:text-sm font-medium text-white block mb-2"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={credentials.price}
                    onChange={handleChange}
                    className=" bg-gray-50 border-2 h-14 border-gray-300 text-gray-900 text-lg md:text-sm  rounded-lg outline-none  focus:border-[#C9AB81] w-full p-2.5"
                    placeholder="400Dhs"
                    required
                  />
                </div>
                <div className=" col-span-4 md:col-span-full">
                  <label
                    htmlFor="ingredients"
                    className=" text-lg md:text-sm font-medium text-white block mb-2"
                  >
                    Ingredients
                  </label>
                  <textarea
                    id="ingredients"
                    name="ingredients"
                    value={credentials.ingredients}
                    onChange={handleChange}
                    className="bg-gray-50 border-2 border-gray-300 h-28 text-gray-900 text-lg md:text-sm rounded-lg outline-none  focus:border-[#C9AB81] w-full p-5"
                    placeholder="Ingredients of Dish"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>

          <div className="p-8 border-gray-200 rounded-sm">
            <button
              onClick={handleSubmit}
              className="text-white bg-[#C9AB81]  font-medium rounded-lg text-[17px] px-9 py-3 text-center"
              type="submit"
            >
              ADD
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{
              opacity: 0,
              x: -500,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -500,
            }}
            transition={{
              duration: "0.4",
            }}
            className="bg-gray-900  text-white font-semibold  w-full h-screen flex flex-col items-center justify-between fixed top-0 right-0 left-0 bottom-0 z-50"
          >
            <div className="flex items-center justify-center h-16 w-full  md:w-0 bg-[#C9AB81] ">
              <span className="text-white font-bold uppercase  text-xl">
                OumFlavor
              </span>
            </div>
            <div className="flex flex-col flex-1 relative  ">
              <nav className="flex-1 px-3 py-10 bg-gray-900 ">
                <Link
                  href="/dashboard/dishes"
                  className="flex items-center  px-4 py-2 mt-10 md:mt-6 text-2xl md:text-lg text-gray-100 hover:bg-gray-700"
                >
                  <GiMeal className="h-9 w-9 mr-3 md:h-6 md:w-6 md:mr-2" />
                  Dishes
                </Link>

                <Link
                  href="/dashboard/reservations"
                  className="flex items-center px-4 py-2 mt-10 md:mt-6 text-2xl md:text-lg text-gray-100 hover:bg-gray-700"
                >
                  <SlCalender className="h-9 w-9 mr-3 md:h-6 md:w-6 md:mr-2" />
                  Reservations
                </Link>
                <Link
                  href="/dashboard/messages"
                  className="flex items-center px-4 py-2 mt-10 md:mt-6 text-2xl md:text-lg text-gray-100 hover:bg-gray-700"
                >
                  <MdOutlineMessage className="h-9 w-9 mr-3 md:h-6 md:w-6 md:mr-2" />
                  Messages
                </Link>
                <Link
                  href="/dashboard/reviews"
                  className="flex items-center px-4 py-2 mt-10 md:mt-6 text-gray-100 text-2xl md:text-lg hover:bg-gray-700"
                >
                  <VscFeedback className="h-9 w-9 mr-3 md:h-6 md:w-6 md:mr-2" />
                  Reviews
                </Link>
                <Link
                  href="/dashboard/add"
                  className="flex items-center px-4 py-2 mt-10 md:mt-6 text-gray-100 text-2xl md:text-lg hover:bg-gray-700"
                >
                  <IoAddCircleOutline className="h-9 w-9 mr-3 md:h-6 md:w-6 md:mr-2" />
                  Add
                </Link>

                <div className="absolute -left-8 bottom-9 md:bottom-5  md:left-6">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </nav>
            </div>

            <IoCloseCircleOutline
              className="w-10 h-10 absolute cursor-pointer top-3 right-4 text-white"
              onClick={() => setOpenMenu(false)}
            />
            {/* <div className="flex justify-center items-center gap-5 pb-5">
            <Image src={logo} alt="logo" className="w-14 h-14" />
            <p className="text-white text-lg">O.EZAROUALI</p>
          </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AddDish;
