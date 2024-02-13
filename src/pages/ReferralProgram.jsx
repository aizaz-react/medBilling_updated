import "../App.css";
import Container from "../components/Container";
import React, { useState, useEffect } from "react";
import "../Header.css";
import logo from "../images/main-logo.webp";
import PrimaryImage from "../images/primary-bg.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";
import PricingCards from "../components/Referral/PricingCards";

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

      {/* <div className="grid md:grid-cols-3 gap-6 md:mx-20 md:my-20 mx-5 mb-16">
        
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
      </div> */}

      <Footer />
    </div>
  );
}

export default Contact;
