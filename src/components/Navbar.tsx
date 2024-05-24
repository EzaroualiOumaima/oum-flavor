"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-removebg-preview.png";
import { usePathname } from "next/navigation";
import { IoIosMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const path = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div>
        <nav
          className={`${
            (path.includes("/dashboard") || path.includes("/sign-in")) &&
            "hidden"
          } bg-white/5 backdrop-blur-lg flex fixed  pr-7 h-20 md:h-[85px] w-full justify-between items-center overflow-hidden z-50 `}
        >
          <div className="w-auto ">
            <Image
              src={logo}
              alt=""
              className="w-[110px] h-[120px]  object-contain hover:cursor-pointer"
            />
          </div>
          <div className="hidden nav-buttons md:flex justify-between w-[700px] text-white text-[17px] font-semibold items-center">
            <Link href="/">
              <button className="navbar-button">Home</button>
            </Link>
            <Link href="/about">
              <button className="navbar-button">About</button>
            </Link>
            <Link href="/menu">
              <button className="navbar-button">Menu</button>
            </Link>
            <Link href="/reviews">
              <button className="navbar-button">Reviews</button>
            </Link>
            <Link href="/contactus">
              <button className="navbar-button">Contact Us</button>
            </Link>
            <Link href="/reservation">
              <button className="button">Find a table</button>
            </Link>
          </div>
          <div className="block md:hidden">
            <IoIosMenu
              className="w-11 h-11 text-white cursor-pointer"
              onClick={() => setOpenMenu(true)}
            />
          </div>
        </nav>
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
            className="bg-white/5 backdrop-blur-lg text-white font-semibold  w-full h-screen flex flex-col items-center justify-between fixed top-0 right-0 left-0 bottom-0 z-50"
          >
            <div className="flex flex-col items-center justify-center gap-8 text-xl pt-36">
              <Link href="/">
                <button className="navbar-button">Home</button>
              </Link>
              <Link href="/about">
                <button className="navbar-button">About</button>
              </Link>
              <Link href="/menu">
                <button className="navbar-button">Menu</button>
              </Link>
              <Link href="/reviews">
                <button className="navbar-button">Reviews</button>
              </Link>
              <Link href="/contactus">
                <button className="navbar-button ">Contact Us</button>
              </Link>
              <Link href="/reservation">
                <button className=" button">Find a table</button>
              </Link>
            </div>

            <IoIosCloseCircleOutline
              className="w-10 h-10 absolute cursor-pointer top-5 right-4 text-white"
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

export default Navbar;
