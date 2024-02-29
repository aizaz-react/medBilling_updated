import "../App.css";
import Container from "../components/Container";
import React, { useState, useEffect } from "react";
import "../Header.css";
import PrimaryImage from "../images/primary-bg.jpg";
import MainImage from "../images/Main.png";
import FastFill from "../images/Fast-fill.webp";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import InfoNav from "../components/InfoNav";
import BillingsCard from "../components/MedicalBilling/BillingCards";
import RevenueIcon from "../svgicons/system-uicons_graph-increase.svg";
import MonthlyDenialIcon from "../svgicons/simple-line-icons_calender.svg";
import VolumeClaimIcon from "../svgicons/lock-square.svg";

function MedicalBilling() {
  return (
    <div>
      <InfoNav />
      <Nav />
      <div className="relative">
        <img src={PrimaryImage} alt="PrimaryImage" className="w-full h-44" />
        <h1 className="font-Oswald text-white text-4xl font-bold absolute top-16 left-16">
          Medical Billing
        </h1>
      </div>
      <div className="bg-darkgray">
        <div className="md:flex gap-44 md:mx-20 mx-5">
          <div className="md:w-1/2 my-16">
            {/* Left section */}
            <h1 className="font-Oswald flex flex-col w-max gap-2 md:text-2xl text-xl">
              Medical Billing Services
              <span className="w-full h-1 bg-blue" />
            </h1>
            <p className="pt-4 font-Lato">
              We provide comprehensive medical billing services, allowing you to
              focus on patient care coordination while we manage all financial
              aspects of your practice. Our team ensures that your claims and
              reimbursements meet your practice's needs. We integrate proven
              solutions to enhance the efficiency and productivity of your
              billing operations.
              <br /> Our specialized accounts receivable (A/R) process tracks
              billable claims, ensuring monthly collections and revenue cycles
              are maintained. Our medical billing solutions empower
              practitioners to manage patient collections, denials, and appeals
              effectively. Our team of medical billing consultants is committed
              to helping your practice achieve its full potential, enabling you
              to deliver quality patient care and maximize reimbursements from
              insurance companies.
            </p>
            <button className="font-Oswald bg-blue mt-12 text-white px-5 py-2 rounded-md font-semibold float-left shadow-lg hover:bg-sky-700">
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
            <h1 className="text-2xl font-Oswald flex flex-col w-max">
              Quick Fulfillment
              <span className="h-1 bg-blue mt-1"></span>
            </h1>
            <p className="pt-4 font-Lato">
              In service delivery, submitting claims promptly is paramount.
              Handling varying claim volumes and ensuring timely submissions can
              pose challenges for internal teams. At Skrisentech Inc Medical
              Billing, our seasoned team specializes in filing claims within 48
              hours in the majority of cases. We utilize state-of-the-art
              technology to collect accurate information and expedite the claims
              process.
            </p>
            <button className="font-Oswald bg-blue mt-12 text-white px-5 py-2 rounded-md font-semibold float-left shadow-lg hover:bg-sky-700">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="md:mt-16 mt-28 flex justify-center items-center">
        <h1 className="font-Oswald md:text-3xl text-xl text-center font-bold flex md:flex-row flex-col md:gap-2">
          Increasing Revenue to Enhance
          <span className="text-blue">Patient Care</span>
        </h1>
      </div>
      <div className="md:mx-20 mx-8 py-10 md:my-10 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-8">
            {/* <img src={RevenueIcon} /> */}
            <h1 className="font-Oswald text-left mb-2 md:text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Increased Revenue
            </h1>
            <p className="font-Lato text-left mb-4 md:text-base text-neutral-600 dark:text-neutral-200">
              Maximize reimbursements and increase your revenue by up to 30%
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-8">
            {/* <img src={MonthlyDenialIcon} /> */}
            <h1 className="font-Oswald text-left mb-2 md:text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              High Volume Claims Submissions
            </h1>
            <p className="font-Lato text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
              With our innovative technology, we can process thousands of
              error-free claims daily.
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-8">
            {/* <img src={VolumeClaimIcon} /> */}
            <h1 className="font-Oswald text-left mb-2 md:text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Compliance with Privacy Requirements
            </h1>
            <p className="font-Lato text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Data transmission and encryption are designed by top-level
              security specialists.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MedicalBilling;
