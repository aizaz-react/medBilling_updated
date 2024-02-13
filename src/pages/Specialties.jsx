import "../App.css";
import Container from "../components/Container";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { LiaFaxSolid } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidBuildingHouse } from "react-icons/bi";
import "../Header.css";
import logo from "../images/main-logo.webp";
import PrimaryImage from "../images/primary-bg.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";
import SpecialtiesCard from "../components/Specialties/SpecialtiesCard";

function Contact() {
  return (
    <div>
      <InfoNav />
      <Navbar />

      <div className="relative">
        <div
          style={{
            background: "linear-gradient(180deg, #204066 0%, #008ac6 100%)",
            opacity: "0.9",
          }}
        >
          <img src={PrimaryImage} alt="PrimaryImage" className="w-full h-44" />
        </div>
        <h1 className="text-white text-4xl font-bold absolute top-16 md:left-16 left-20 hover:bg-sky-700">
          Our Specialties
        </h1>
      </div>
      <div className="my-16">
        <h2 className="text-blue text-xl font-semibold text-center pt-5">
          We Cover
        </h2>
        <h1 className=" flex flex-col gap-2 md:text-3xl md:font-semibold text-2xl font-semibold text-center mx-auto w-max">
          Our Specialties
          <span className="w-full h-1 bg-divideroclor" />
        </h1>
        <SpecialtiesCard />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
