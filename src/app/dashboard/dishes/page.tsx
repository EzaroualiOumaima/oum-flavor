"use client";
import {
  deleteDishes,
  getAllDishes,
  updateDishes,
} from "@/store/dishes/dishThunk";
import { AppDispatch, RootState } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bgImg from "@/assets/bgImg.jpg";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dish } from "@/app/types";

// interface Dish {
//   title: string;
//   category: string;
//   ingredients: string;
//   price: number;
// }

const MenuPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {dishes}  = useSelector((state: RootState) => state.dishes);
  const [id, setId] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [category, setCategory] = useState("");
  const [openUpdate, setOpenUpdate] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    ingredients: "",
    price: 0,
  });

  const [filteredDishes, setFilteredDishes] = useState(dishes);
  const [index, setIndex] = useState(1);

  const deleteModel = (id: string) => {
    setId(id);
    setOpenDelete(true);
  };

  const updateModel = (item: any) => {
    setFormData({
      id: item._id,
      title: item.title,
      ingredients: item.ingredients,
      price: item.price,
    });
    setOpenUpdate(true);
  };

  const handleUpdate = async () => {
    try {
      await dispatch(updateDishes(formData));
      await dispatch(getAllDishes());
      setOpenUpdate(false);
      toast.success("Dish updated");
    } catch (error) {
      console.error("Error updating dishes:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteDishes(id));
      await dispatch(getAllDishes());
      setOpenDelete(false);
      toast.success("Dish deleted");
    } catch (error) {
      console.error("Error deleting dishes:", error);
    }
  };

  useEffect(() => {
    dispatch(getAllDishes());
  }, [dispatch]);

  useEffect(() => {
    setFilteredDishes(
      dishes.filter(
        (item:Dish ) =>
          item.category.toLowerCase() ===
          (category.length > 0 ? category.toLowerCase() : "appetizers")
      )
    );
  }, [category, dishes]);

  const handleChange = (param: string, index: number) => {
    setIndex(index);
    setCategory(param);
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
        className="flex flex-col gap-10 w-full bg-cover overflow-y-auto  no-scroll-bar h-screen "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImg.src})`,
        }}
      >
        <ul className="flex flex-row gap-36 mt-5 mx-4 text-xl font-[Poppins]">
          <li className="text-white p-2">
            <button
              className={`res-buttons  ${
                index === 1 ? "bg-[#C9AB81]" : "bg-transparent"
              }`}
              onClick={() => handleChange("Appetizers", 1)}
            >
              Appetizers
            </button>
          </li>
          <li className="text-white p-2">
            <button
              className={` res-buttons ${
                index === 2 ? "bg-[#C9AB81]" : "bg-transparent"
              }`}
              onClick={() => handleChange("Main Dish", 2)}
            >
              Main Dish
            </button>
          </li>
          <li className="text-white p-2">
            <button
              className={`res-buttons ${
                index === 3 ? "bg-[#C9AB81]" : "bg-transparent"
              }`}
              onClick={() => handleChange("Dessert", 3)}
            >
              Dessert
            </button>
          </li>
          <li className="text-white p-2">
            <button
              className={`res-buttons ${
                index === 4 ? "bg-[#C9AB81]" : "bg-transparent"
              }`}
              onClick={() => handleChange("Drinks", 4)}
            >
              Drinks
            </button>
          </li>
          <li className="text-white p-2">
            <button
              className={`res-buttons  ${
                index === 5 ? "bg-[#C9AB81]" : "bg-transparent"
              }`}
              onClick={() => handleChange("Cocktails", 5)}
            >
              Cocktails
            </button>
          </li>
        </ul>
        <table className="w-full text-[1rem] text-left rtl:text-right overflow-hidden ">
          <thead className="text-xs uppercase ">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#C9AB81] "
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#C9AB81]  "
              >
                Ingredients
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#C9AB81]"
              >
                Price
              </th>

              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#C9AB81]"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200 text-white">
            {filteredDishes
              .slice()
              .reverse()
              .map((dish: Dish) => (
                <tr key={dish._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{dish.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {dish.ingredients}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {dish.price} Dhs
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-3">
                      <MdEditSquare
                        onClick={() => updateModel(dish)}
                        className="cursor-pointer h-6 w-6 text-blue-600"
                      />

                      <RiDeleteBin6Line
                        onClick={() => deleteModel(dish._id)}
                        className="h-6 w-6 cursor-pointer text-red-600"
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {openDelete && (
        <>
          <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#000000ac] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: "0.5" }}
              className="p-6 flex flex-col items-center justify-center rounded-lg bg-gray-900 px-6 gap-5"
            >
              <h1 className="text-lg text-white">
                Confirm the deletion of this dish?
              </h1>
              <div className="flex gap-4 items-center">
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-md"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
                <button
                  className="px-4 py-2 bg-transparent border border-white text-white rounded-md"
                  onClick={() => {
                    setOpenDelete(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}

      {openUpdate && (
        <>
          <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#000000ac] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: "0.5" }}
              className="bg-gray-900 w-[30rem] p-6 rounded-md flex flex-col gap-5 text-white"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-md border-gray-700 text-white px-2 py-3"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Ingredients</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 rounded-md border-gray-800 text-white px-2 py-3"
                  value={formData.ingredients}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ingredients: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Reservation Time</label>
                <input
                  type="number"
                  className="w-full bg-gray-800 rounded-md border-gray-800 text-white px-2 py-3"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: Number(e.target.value),
                    })
                  }
                />
              </div>

              <div className="flex gap-4 items-center justify-center">
                <button
                  className="px-4 py-2 bg-[#2de000] text-white rounded-md hover:scale-110 duration-500"
                  onClick={() => handleUpdate()}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-transparent border border-white text-white rounded-md hover:scale-110 duration-500"
                  onClick={() => {
                    setOpenUpdate(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
};

export default MenuPage;
