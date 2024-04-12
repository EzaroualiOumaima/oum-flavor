"use client";

import { addDishes } from "@/store/dishes/dishThunk";
import { AppDispatch, RootState } from "@/store/store";
import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bgImg from "@/assets/bgImg.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddDish = () => {
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
        className=" bg-cover w-full flex items-center justify-center  "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImg.src})`,
        }}
      >
        <div className=" border-4 rounded-lg w-[90%] ">
          <div className="flex items-center justify-center p-5 border-b ">
            <h3 className="text-3xl font-medium font-[Poppins] text-white">
              Add Dish
            </h3>
          </div>

          <div className="p-6 space-y-6">
            <form>
              <div className="grid grid-cols-6 gap-6 ">
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="dish-name"
                    className="text-sm font-medium text-white block mb-2"
                  >
                    Dish Name
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className=" border-2 h-14 focus:border-[#C9AB81]  text-gray-900 sm:text-sm rounded-lg w-full p-2.5 outline-none"
                    placeholder="Title"
                    value={credentials.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="category"
                    className="text-sm font-medium text-white block mb-2"
                  >
                    Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    value={credentials.category}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border h-14 focus:border-[#C9AB81] outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg  w-full p-2.5"
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
                    className="text-sm font-medium text-white block mb-2"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={credentials.price}
                    onChange={handleChange}
                    className=" bg-gray-50 border-2 h-14 border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none  focus:border-[#C9AB81] w-full p-2.5"
                    placeholder="400Dhs"
                    required
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="ingredients"
                    className="text-sm font-medium text-white block mb-2"
                  >
                    Ingredients
                  </label>
                  <textarea
                    id="ingredients"
                    name="ingredients"
                    value={credentials.ingredients}
                    onChange={handleChange}
                    className="bg-gray-50 border-2 border-gray-300 h-28 text-gray-900 sm:text-sm rounded-lg outline-none  focus:border-[#C9AB81] w-full p-5"
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
    </>
  );
};

export default AddDish;
