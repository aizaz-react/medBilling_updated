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
import Brud from "../images/brud.png";
import MainCodingImage from "../images/Main3.png";
import MedialIMage from "../images/medial.png";
import DynamicImage from "../images/positive_dynamic.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";

function MedicalCoding() {
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
          }}
        >
          <img src={Brud} alt="Brud" className="opacity-5 w-full h-44" />
        </div>
        <h1 className="text-white text-4xl font-bold absolute top-16 md:left-16 left-[75px]">
          Medical Coding
        </h1>
      </div>
      <div className="bg-darkgray">
        <div className="md:flex gap-44 md:mx-20 pt-16 md:pt-0 mx-5">
          <div className="md:w-1/2 md:my-16">
            {/* Left section */}
            <h1 className="flex flex-col w-max gap-2 md:text-2xl text-[22px]">
              Medical Coding Services
              <span className="w-full h-1 bg-blue" />
            </h1>
            <p className="pt-4">
              AllStars Medical Coding Services: Precision in Healthcare
              Documentation
            </p>
            <p className="pt-4">
              Welcome to AllStars Medical Coding Services, your trusted partner
              for precision and accuracy in healthcare documentation. Our expert
              team ensures that every code is meticulously and accurately
              assigned, allowing you to optimize your revenue while maintaining
              compliance with industry regulations. Trust us to elevate your
              coding standards and streamline your healthcare operations with
              AllStars.
            </p>
            <button className="bg-blue mt-12 text-white px-5 py-2 rounded-md font-semibold float-left shadow-lg hover:bg-sky-700">
              Contact Us
            </button>
          </div>

          {/* Right section */}
          <img
            className="md:pt-28"
            src={MainCodingImage}
            alt="MainImage"
            style={{ backgroundPosition: "bottom" }}
          ></img>
        </div>
      </div>

      {/* Card Section */}
      <div className="md:mt-16 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-5 md:mx-20">
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center text-elementcolor font-semibold text-2xl">
                  Certified Medical Coders
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  With the help of our certified medical coding specialists
                  working on your project, your claim denial rate is
                  significantly reduced. Our coders use the best in class coding
                  tools and resources available in the industry
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-semibold text-elementcolor text-2xl">
                  Coding Audits
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  Daily, monthly, quarterly and yearly audits is what
                  distinguishes us from rest working in the same space. For our
                  clients we offer scheduled and on-demand coding audits without
                  any cost
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-semibold text-elementcolor text-2xl">
                  Coding Effective
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  Using medical coding services is cost effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkgray md:mt-20 mt-10">
        <div className="flex md:flex-row flex-col justify-between md:py-20 pb-14 md:mx-20 mx-5">
          <img
            src={DynamicImage}
            className="h-auto max-h-[35rem] md:w-1/2"
          ></img>

          <div>
            <h1 className="md:text-2xl text-xl">
              Maximizing Your Reimbursement Potential
            </h1>
            <div className="h-1 md:w-[28rem] w-[23rem] bg-blue mt-1"></div>
            <p className="pt-4">
              At AllStars Medical Coding Services, we understand that coding
              accuracy directly impacts your revenue, and we are committed to
              ensuring you receive the highest possible reimbursement.
              Efficiency is at the core of our coding process. Our coding team
              comprises highly efficient and seasoned professionals, each with a
              minimum of five years of experience.
            </p>
            <p className="pt-3">
              When it comes to coding, we are vigilant about preventing two
              common errors:
            </p>
            <p className="pt-3">
              Up-coding (or over-coding), which often leads to claim denials.
            </p>
            <p>
              Down-coding, resulting in reimbursements that fall short of what
              you rightfully deserve.
            </p>
            <p className="pt-1">
              Our certified coders (CPC) are well-versed in ICD-10-CM, LMRP, CPT
              Assistant, and HCPCS Level II. We meticulously cross-verify
              diagnoses with procedural codes, applying the appropriate
              modifiers when needed.
            </p>
            <p className="pt-3">
              To ensure the utmost accuracy, our senior coding staff conducts
              audits to verify the codes assigned. Our dedicated quality
              assurance team goes the extra mile to guarantee that your coding
              is error-free, resulting in maximum reimbursement and minimizing,
              if not entirely eliminating, claim denials. With AllStars, you can
              trust in our expertise to optimize your revenue while maintaining
              coding precision.”
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MedicalCoding;
