"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts, getContacts } from "@/store/contacts/contactThunk";

const MessagePage = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { contacts } = useSelector((state: RootState) => state.contacts);
  const [openDelete, setOpenDelete] = useState(false);

  const deleteModel = (id: string) => {
    setId(id);
    setOpenDelete(true);
  };

  useEffect(() => {
    const getAllContacts = async () => {
      await dispatch(getContacts());
    };
    getAllContacts();
  }, [dispatch]);

  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteContacts(id));
      await dispatch(getContacts());
      setOpenDelete(false);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <>
      <div className=" mt-5 w-full relative overflow-x-auto overflow-y-auto sm:rounded-lg h-[75vh]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-hidden ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#f2910a]"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#f2910a]"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#f2910a]"
              >
                Message
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-Poppins font-bold text-[#f2910a]"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {contacts.map((contact: any, index: number) => (
              <tr
                key={index}
                className="even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4 font-Poppins font-md text-gray-500">
                  <h1 className="w-[250px] whitespace-nowrap overflow-hidden text-ellipsis text-[15px]">
                    {contact.name}
                  </h1>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-Poppins text-gray-500 dark:text-gray-500">
                  {contact.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[15px] font-Poppins text-gray-500 dark:text-gray-500">
                  {contact.message}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-5">
                    <button
                      onClick={() => deleteModel(contact._id)}
                      className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openDelete && (
        <>
          <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#000000dd] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: "0.5" }}
              className="p-6 flex flex-col items-center justify-center rounded-lg bg-gray-800 gap-5"
            >
              <h1 className="text-lg text-white">
                Confirm the deletion of this contact?
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
    </>
  );
};

export default MessagePage;
