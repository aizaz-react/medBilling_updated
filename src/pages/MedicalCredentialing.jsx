import "../App.css";
import Container from "../components/Container";
import React, { useState, useEffect } from "react";
import "../Header.css";
import PrimaryImage from "../images/primary-bg.jpg";
import serviceAimnImage from "../images/amin3.png";
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
        <h1 className="text-white text-4xl font-bold absolute md:top-16 md:left-16 top-12 left-[70px]">
          Credentialing & Enrollment
        </h1>
      </div>
      <div className="bg-darkgray">
        <div className="md:flex gap-44 md:mx-20 mx-5 mt-16 md:mt-0">
          <div className="md:w-1/2 md:my-32">
            {/* Left section */}
            <h1 className="flex flex-col w-max gap-2 md:text-2xl text-xl whitespace-nowrap">
              Reduce the Complexity of Credentialing
              <span className="w-full h-1 bg-blue" />
            </h1>
            <p className="pt-4">
              AllStars can handle any specialty including laboratories and DMEs.
              Our experts send error free applications to insurances and do
              proper follow-up till the case is closed. Our first time
              application acceptance ratio is 98%. We can assist you in setting
              up your setups with insurance companies for electronic claims
              submissions, rejections, eligibility, payment information, denials
              and fund transfer.
            </p>
            <button className="bg-blue mt-12 text-white px-5 py-2 rounded-md font-semibold float-left shadow-lg hover:bg-sky-700">
              Contact Us
            </button>
          </div>
          <div>
            {/* Right section */}
            <img
              className="md:pt-28 pt-10"
              src={serviceAimnImage}
              alt="MainImage"
              style={{ backgroundPosition: "bottom" }}
            ></img>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-3xl text-center">Our Credentialing Services</h1>
        <div className="h-1 w-[21rem] bg-blue mt-1 mx-auto"></div>
      </div>

      {/* Cards Section */}
      <CredentialingCards />
      <Footer />
    </div>
  );
}
export default MedicalCredentialing;
