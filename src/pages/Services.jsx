import "../App.css";
import Container from "../components/Container";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { LiaFaxSolid } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidBuildingHouse } from "react-icons/bi";
import "../Header.css";
import logo from "../images/main-logo.webp";
import Brud from "../images/brud.png";
import GrowthImage from "../images/growth.png";
import Footer from "../components/Footer";
import InfoNav from "../components/InfoNav";
import Navbar from "../components/Navbar";

const infoNavItems = {
  leftSide: [
    { text: "info@allstarsmb.com", icon: <MdEmail size={18} /> },
    { text: "(501)-424-0123", icon: <BsFillTelephoneFill size={18} /> },
    { text: "(844) 726-9464", icon: <BiSolidBuildingHouse size={20} /> },
  ],
  rightSide: [
    { icon: <FaFacebookF /> },
    { icon: <FaLinkedinIn /> },
    { icon: <FaYoutube /> },
  ],
};

function Services() {
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
          <img
            src={Brud}
            alt="Brud"
            className="opacity-10 w-full md:h-44 h-32"
          />
        </div>
        <h1 className="text-white text-4xl font-bold absolute md:top-14 top-10 md:left-16 left-32">
          Services
        </h1>
      </div>
      <div className="bg-darkgray">
        <div className="md:flex gap-10 md:mx-20 mx-8 my-14 md:my-0">
          <div className="md:w-2/3 md:my-24 w-full">
            {/* Left section */}
            <h1 className="text-2xl">AllStars Medical Billing Services</h1>
            <p className="text-blue mt-2 text-lg">
              Medical Billing & Revenue Cycle Solutions
            </p>
            <p className="mt-5">
              Our purpose is to offer a comprehensive range of revenue-related
              services essential for the smooth operation of medical practices.
              We understand that your primary focus is delivering high-quality
              patient care. However, tasks such as insurance verification, payer
              credentialing, medical billing, accounts receivable follow-up,
              appeals for unpaid claims, and revenue management are all vital
              components of managing a medical business.
            </p>

            <p className="mt-3">
              Moreover, we recognize the constant changes in billing codes,
              insurance requirements, and payer policies, which can be
              exceedingly time-consuming for healthcare practitioners and
              facilities to keep up with while maintaining their operations.
            </p>
            <p className="mt-3">
              That’s where we come in! For more details about our services
              tailored to your specific area of specialization, please click on
              one of the links below:
            </p>
            <button className="bg-blue mt-12 text-white px-5 py-2 rounded-md font-semibold float-left shadow-lg hover:bg-sky-700">
              Contact Us
            </button>
          </div>
          <div>
            {/* Right section */}
            <img
              className="md:pt-28"
              src={GrowthImage}
              alt="MainImage"
              style={{ backgroundPosition: "bottom" }}
            ></img>
          </div>
        </div>
      </div>

      <div className="md:my-20 pb-10 mx-8 md:mx-20 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        {/* Box 1 */}
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-6">
            <h1 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Medical Billing
            </h1>
            <div className="h-1 w-[8rem] bg-blue mt-1 mb-1 mx-auto"></div>
            <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Credentialing specialists assist healthcare providers in
              enrollment, ensuring insurance reimbursement eligibility. We offer
              comprehensive credentialing solutions for all practices.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-6">
            <h1 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Medical Coding
            </h1>
            <div className="h-1 w-[9rem] bg-blue mt-1 mb-1 mx-auto"></div>
            <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
              With the help of our certified medical coding specialists working
              on your project, your claim denial rate is significantly reduced.
              Our coders use the best-in-class coding tools and resources
              available in the industry
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-6">
            <h1 className="mb-2 text-xl font-medium text-center leading-tight text-neutral-800 dark:text-neutral-50">
              Medical Credentialing
            </h1>
            <div className="h-1 w-[12rem] bg-blue mt-1 mb-1 mx-auto"></div>
            <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
              AllStars can handle any specialty including laboratories and DMEs.
              Our experts send error-free applications to insurances and do
              proper follow-up till the case is closed.
            </p>
          </div>
        </div>
        {/* Box 1 */}
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-6">
            <h1 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Verification of Benefits
            </h1>
            <div className="h-1 w-[12rem] bg-blue mt-1 mb-1 mx-auto"></div>
            <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Our Insurance Benefits Verification Services provide healthcare
              providers with a hassle-free way to confirm patient insurance
              coverage and eligibility.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-6">
            <h1 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Prior Authorization Services
            </h1>
            <div className="h-1 w-[15rem] bg-blue mt-1 mb-1 mx-auto"></div>
            <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Our Prior Authorization Services take the complexity out of
              obtaining insurance approvals for medical procedures and
              treatments. We simplify the process for healthcare providers,
              ensuring you get the necessary authorizations efficiently.
            </p>
          </div>
        </div>
        {/* Box 3 */}
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-6">
            <h1 className="mb-2 text-xl font-medium text-center leading-tight text-neutral-800 dark:text-neutral-50">
              Patient Billing
            </h1>
            <div className="h-1 w-[7rem] bg-blue mt-1 mb-1 mx-auto"></div>
            <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Our Patient Billing Services are designed to make healthcare
              billing transparent, efficient, and stress-free for both patients
              and healthcare providers
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Services;
