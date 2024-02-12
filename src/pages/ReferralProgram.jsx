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
import { GoArrowRight } from "react-icons/go";
import { BiSolidBuildingHouse } from "react-icons/bi";
import "../Header.css";
import logo from "../images/main-logo.webp";
import Brud from "../images/brud.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";

function Contact() {
  return (
    <div>
      <InfoNav />
      <Navbar />

      <div className="relative">
        <div
          className="bg-gradient-to-r from-blue to-blue"
          style={{
            background: "linear-gradient(180deg, #204066 0%, #008ac6 100%)",
            opacity: "0.9",
            transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
          }}
        >
          <img src={Brud} alt="Brud" className="opacity-5 w-full h-44" />
        </div>
        <h1 className="text-white text-4xl font-bold absolute top-16 md:left-16 left-20 hover:bg-sky-700">
          Referral Program
        </h1>
      </div>
      <div className="my-16 mx-5">
        <h1 className="md:text-4xl md:font-semibold text-2xl font-semibold text-center mx-auto w-max">
          <span className="inline-block">LET'S GROW </span>
          <span className="text-blue"> TOGETHER!</span>
          <hr className="h-1 bg-blue" />
        </h1>
        <p className="text-center pt-5 md:mx-72">
          Refer us a client for medical billing, medical coding and/or medical
          transcriptions services and get a fixed monthly percentage on the
          collected revenue.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:mx-20 md:my-20 mx-5 mb-16">
        {/* First Card */}
        <div className="rounded-md p-4 custom-shadow">
          <h1 className="text-xl font-bold text-blue">
            Avg. Monthly Collection
          </h1>
          <p className="pt-[73px] text-lg flex flex-row items-center gap-3">
            <GoArrowRight className="text-blue" /> Less Than 200K
          </p>
          <hr />
          <p className="text-lg flex flex-row items-center gap-3">
            <GoArrowRight className="text-blue" /> Less Than 400K
          </p>
          <hr />
          <p className="text-lg flex flex-row items-center gap-3">
            <GoArrowRight className="text-blue" /> More Than 400k*
          </p>
        </div>

        {/* Second Card */}
        <div className="rounded-md p-4 custom-shadow">
          <h1 className="text-xl font-bold text-blue">Referral Pro</h1>
          <h3 className="text-lg pt-3">Referral Ultimate</h3>
          <p className="pt-8 text-lg flex flex-row items-center gap-3">
            <GoArrowRight className="text-blue" /> Get 6% of Monthly Invoice
          </p>
          <hr />
          <p className="text-lg flex flex-row items-center gap-3">
            <GoArrowRight className="text-blue" /> Get 7% of Monthly Invoice
          </p>
          <hr />
          <p className="text-lg flex flex-row items-center gap-3">
            <GoArrowRight className="text-blue" /> Get 8% of Monthly Invoice
          </p>
        </div>

        {/* Third Card */}
        <div className="rounded-md p-4 custom-shadow  ">
          <h1 className="text-xl font-bold text-blue">Referral Ultimate</h1>
          <h3 className="text-lg pt-3">Monthly Bonus Forever</h3>
          <p className="pt-8 text-lg flex flex-row items-center gap-3">
            <GoArrowRight className="text-blue" /> Get 4% of Monthly Invoice
          </p>
          <hr />
          <p className="text-lg flex flex-row items-center gap-3">
            <GoArrowRight className="text-blue" /> Get 5% of Monthly Invoice
          </p>
          <hr />
          <p className="text-lg flex flex-row items-center gap-3">
            <GoArrowRight className="text-blue" /> Get 6% of Monthly Invoice
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
