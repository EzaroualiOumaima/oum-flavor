import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import logo from "@/assets/logo-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";
import bgImg from "@/assets/bgImg.jpg";
import { CiGlobe } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5 ), rgba(0, 0, 0, 0.5)), url(${bgImg.src})`,
      }}
    >
      <section className="max-w-full mx-8 text-white">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4  ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <Image src={logo} alt="Logo" className="max-w-[70px]" />
              Oum<span className="text-[#C9AB81]">Flavor</span>
            </h1>
            <p className="text-[15px] italic">
              Oum Flavor, Where global flavors meet in a cozy and inviting
              ambiance, promising a culinary journey to delight every palate.
            </p>
            <br />
            <div className="flex items-center gap-4">
              <FaLocationArrow className="text-[#C9AB81]" />
              <p>Morocco , CASABLANCA</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="py-8 px-4 ">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
              </h1>
              <ul className="flex flex-col gap-3 font-[Poppins]">
                <Link href="#" className="cursor-pointer hover:text-[#C9AB81]">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="cursor-pointer hover:text-[#C9AB81]"
                >
                  About
                </Link>
                <Link
                  href="/menu"
                  className="cursor-pointer hover:text-[#C9AB81]"
                >
                  Menu
                </Link>
                <Link
                  href="/reservation"
                  className="cursor-pointer hover:text-[#C9AB81]"
                >
                  Reservation
                </Link>
              </ul>
            </div>

            <div className="">
              <div className="py-8 px-4 font-[Poppins] ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Our Menu
                </h1>
                <ul className="flex flex-col gap-3">
                  <Link
                    href="/menu"
                    className="cursor-pointer hover:text-[#C9AB81]"
                  >
                    Appetizers
                  </Link>
                  <Link
                    href="/menu"
                    className="cursor-pointer hover:text-[#C9AB81]"
                  >
                    Main Dish
                  </Link>
                  <Link
                    href="/menu"
                    className="cursor-pointer hover:text-[#C9AB81]"
                  >
                    Drinks
                  </Link>
                  <Link
                    href="/menu"
                    className="cursor-pointer hover:text-[#C9AB81]"
                  >
                    Dessert
                  </Link>
                  <Link
                    href="/menu"
                    className="cursor-pointer hover:text-[#C9AB81]"
                  >
                    Cocktails
                  </Link>
                </ul>
              </div>
            </div>

            <div className="py-8 px-4 flex flex-col ">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 ">
                Contact Us
              </h1>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt className="h-6 w-6 text-[#C9AB81]" />
                <p className="cursor-pointer hover:text-[#C9AB81]">
                  +212 689 25 65 61
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <IoIosMail className="w-6 h-6 text-[#C9AB81]" />
                <p className="cursor-pointer hover:text-[#C9AB81] font-[Poppins] ">
                  oumFlavor@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <CiGlobe className="w-6 h-6  text-[#C9AB81]" />
                <h1 className=" font-bold sm:text-left  ">Socials:</h1>
                <Link href="#">
                  <FaInstagram
                    data-testid="instagram-icon"
                    className="text-2xl  cursor-pointer hover:text-[#C9AB81]"
                  />
                </Link>
                <Link href="#">
                  <FaFacebook
                    data-testid="facebook-icon"
                    className="text-2xl cursor-pointer hover:text-[#C9AB81]"
                  />
                </Link>
                <Link href="#">
                  <FaWhatsapp
                    data-testid="whatsapp-icon"
                    className="text-2xl cursor-pointer hover:text-[#C9AB81]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/45 ">
            @copyright 2024 All rights reserved || Made with by{" "}
            <span className="text-[#C9AB81]">OumFlavor</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
