"use client";

import { addDishes } from "@/store/dishes/dishThunk";
import { AppDispatch, RootState } from "@/store/store";
import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
    console.log(credentials);
    alert("data sent");
  };
  return (
    <>
      <div className="bg-white border-4 rounded-lg relative m-12 w-full">
        <div className="flex items-center justify-center p-5 border-b rounded-t">
          <h3 className="text-2xl font-semibold">Add Dish</h3>
        </div>

        <div className="p-6 space-y-6">
          <form>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="dish-name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Dish Name
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                  placeholder="Title"
                  value={credentials.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  value={credentials.category}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
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
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={credentials.price}
                  onChange={handleChange}
                  className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="400Dhs"
                  required
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="ingredients"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Ingredients
                </label>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  value={credentials.ingredients}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Ingredients of Dish"
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-gray-200 rounded-b">
          <button
            onClick={handleSubmit}
            className="text-white bg-[#C9AB81]   font-medium rounded-lg text-sm px-5 py-3 text-center"
            type="submit"
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default AddDish;
