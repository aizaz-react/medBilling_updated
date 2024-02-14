import "../App.css";
import Container from "../components/Container";
import React, { useState, useEffect } from "react";
import "../Header.css";
import logo from "../images/main-logo.webp";
import PrimaryImage from "../images/primary-bg.jpg";
import MainImage from "../images/Main.png";
import FastFill from "../images/Fast-fill.webp";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import InfoNav from "../components/InfoNav";
import BillingsCard from "../components/MedicalBilling/BillingCards";

function MedicalBilling() {
  return (
    <div>
      <InfoNav />
      <Nav />
      <div className="relative">
        <img src={PrimaryImage} alt="PrimaryImage" className="w-full h-44" />
        <h1 className="text-white text-4xl font-bold absolute top-16 left-16">
          Medical Billing
        </h1>
      </div>
      <div className="bg-darkgray">
        <div className="md:flex gap-44 md:mx-20 mx-5">
          <div className="md:w-1/2 my-16">
            {/* Left section */}
            <h1 className="flex flex-col w-max gap-2 md:text-2xl text-xl">
              Medical Billing Services
              <span className="w-full h-1 bg-blue" />
            </h1>
            <p className="pt-4">
              Medical billing is the process of sending bills to health
              insurance companies to get paid for healthcare services. A medical
              billing specialist’s job is to make sure the healthcare provider
              gets paid for the work they do. A good biller can help the
              healthcare facility earn more money.
            </p>
            <p className="pt-4">
              If your medical practice is facing challenges with billing and
              revenue management, there’s a solution. AllStars Medical Billing
              offers tailored medical billing services that cater to practices
              of all sizes and specialties. Our goal is to transform the billing
              process for small practices, making it more efficient, compliant,
              and less stressful. Through our reliable system, we guarantee
              precise coding, reducing errors, and optimizing revenue.
            </p>
            <button className="bg-blue mt-12 text-white px-5 py-2 rounded-md font-semibold float-left shadow-lg hover:bg-sky-700">
              Contact Us
            </button>
          </div>
          <div>
            {/* Right section */}
            <img
              className="md:pt-44"
              src={MainImage}
              alt="MainImage"
              style={{ backgroundPosition: "bottom" }}
            ></img>
          </div>
        </div>
      </div>

      <BillingsCard />

      <div className="bg-darkgray mt-20">
        <div className="md:flex gap-16 md:mx-20 mx-5 md:py-20">
          {/* left section */}
          <img className="pb-5 md:pb-0" src={FastFill} alt="FastFill"></img>

          <div className="md:w-1/2 md:my-16">
            {/* right section */}
            <h1 className="text-2xl">Fast Filling</h1>
            <div className="h-1 w-[7rem] bg-blue mt-1"></div>
            <p className="pt-4">
              When you provide a service, it’s crucial to submit the claims
              promptly. Managing fluctuating claim volumes and ensuring timely
              submissions can be a challenge for in-house staff. At AllStars
              Medical Billing, our experienced team excels at filing claims
              within 48 hours in most cases. We leverage cutting-edge technology
              to gather precise information and expedite the claim process.
            </p>
            <button className="bg-blue mt-12 text-white px-5 py-2 rounded-md font-semibold float-left shadow-lg hover:bg-sky-700">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="md:mt-16 mt-28 flex justify-center items-center">
        <h1 className="md:text-3xl text-xl text-center font-bold flex md:flex-row flex-col">
          Boosting Revenue for Better{" "}
          <span className="text-blue">Patient Care</span>
        </h1>
      </div>
      <div className="md:mx-20 mx-8 py-10 md:my-10 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-8">
            <h1 className="text-left mb-2 md:text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Increased Revenue
            </h1>
            <p className="text-left mb-4 md:text-base text-neutral-600 dark:text-neutral-200">
              Get maximum reimbursements & increase your revenue up to 30%
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-8">
            <h1 className="text-left mb-2 md:text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              High Volume Claims Submissions
            </h1>
            <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Utilizing our innovative technology, we are able to process
              thousands of error-free claims daily.
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-8">
            <h1 className="text-left mb-2 md:text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Compliance with Privacy Requirements
            </h1>
            <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Data transmission and encryption designed by top-level security
              specialists.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MedicalBilling;
