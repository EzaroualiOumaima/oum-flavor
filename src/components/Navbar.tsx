"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-removebg-preview.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <nav
      className={`${
        (path.includes("/dashboard") || path.includes("/sign-in")) && "hidden"
      } bg-white/5 backdrop-blur-lg flex fixed  sm:pl-3 pr-7 h-24 w-full justify-between items-center overflow-hidden z-30 sm:justify-between`}
    >
      <div className="w-auto ">
        <Image
          src={logo}
          alt=""
          className="w-[110px] h-[120px]  object-contain hover:cursor-pointer"
        />
      </div>
      <div className="nav-buttons hidden md:flex justify-between w-[700px] text-white text-xl items-center">
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
          <button className="p-3 border border-[#C9AB81] rounded hover:scale-110 duration-500 hover:bg-[#C9AB81]  text-lg font-semibold font-">
            RESERVATION
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
