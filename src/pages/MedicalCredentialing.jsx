import "../App.css";
import Container from "../components/Container";
import React, { useState, useEffect } from "react";
import "../Header.css";
import PrimaryImage from "../images/primary-bg.jpg";
import Credentialingimg from "../images/Credentialing-screen.jpg";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import InfoNav from "../components/InfoNav";
import CredentialingCards from "../components/MedicalCredentialing/CredentialingCards";

function MedicalCredentialing() {
  return (
    <div>
      <InfoNav />
      <Nav />

      <div className="relative">
        <img src={PrimaryImage} alt="PrimaryImage" className="w-full h-44" />
        <h1 className="font-Oswald text-white text-4xl font-bold absolute md:top-16 md:left-16 top-12 left-[70px]">
          Credentialing & Enrollment
        </h1>
      </div>
      <div className="bg-darkgray md:flex gap-32 md:px-20 px-5 mt-16 md:mt-0">
        <div className="md:w-1/2 md:my-32">
          {/* Left section */}
          <h1 className="font-Oswald flex flex-col w-max gap-2 md:text-2xl text-xl whitespace-nowrap">
            Reduce the Complexity of Credentialing
            <span className="w-full h-1 bg-blue" />
          </h1>
          <p className="pt-4 font-Lato">
            Skrisentech Inc can manage any specialty, including laboratories and
            DMEs. Our experts submit error-free applications to insurance
            companies and provide proper follow-up until the case is closed. Our
            first-time application acceptance ratio is 98%. We can help you set
            up your arrangements with insurance companies for electronic claims
            submissions, rejections, eligibility, payment information, denials,
            and fund transfers.
          </p>
          <button className="font-Oswald bg-blue mt-12 text-white px-5 py-2 rounded-md font-semibold float-left shadow-lg hover:bg-sky-700">
            Contact Us
          </button>
        </div>
        <div>
          {/* Right section */}
          <img
            className="md:pt-28 pt-10 rounded-md"
            src={Credentialingimg}
            alt="MainImage"
            style={{ backgroundPosition: "bottom" }}
          ></img>
        </div>
      </div>
      <h1 className="mt-20 text-3xl text-center font-Oswald flex flex-col w-max mx-auto">
        Our Credentialing Services
        <span className="h-1 bg-blue mt-1"></span>
      </h1>

      {/* Cards Section */}
      <CredentialingCards />
      <Footer />
    </div>
  );
}
export default MedicalCredentialing;
