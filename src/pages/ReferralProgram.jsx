import "../App.css";
import Container from "../components/Container";
import React, { useState, useEffect } from "react";
import "../Header.css";
import PrimaryImage from "../images/primary-bg.jpg";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import InfoNav from "../components/InfoNav";
import PricingCards from "../components/Referral/PricingCards";

function Contact() {
  return (
    <div>
      <InfoNav />
      <Nav />

      <div className="relative">
        <img src={PrimaryImage} alt="PrimaryImage" className="w-full h-44" />

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
      <PricingCards />

      <Footer />
    </div>
  );
}

export default Contact;
