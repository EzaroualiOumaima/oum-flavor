import React from "react";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import MenuPage from "./menu/page";
import ReservationPage from "./reservation/page";
import Footer from "@/components/Footer";
import { InfiniteMovingCardsDemo } from "@/components/ReviewPage";
import HomePage from "@/components/HomePage";

const page = () => {
  return (
    <>
      <HomePage />
      <AboutPage />
      <MenuPage />
      <ReservationPage />
      <ContactPage />
      <InfiniteMovingCardsDemo />
      <Footer />
    </>
  );
};

export default page;
