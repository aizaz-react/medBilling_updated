import "../App.css";
import Container from "../components/Container";
import React, { useState, useEffect } from "react";
import "../Header.css";
import PrimaryImage from "../images/primary-bg.jpg";
import serviceAimnImage from "../images/amin3.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";

function MedicalCredentialing() {
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
      <div className="md:my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-5 md:mx-20 my-12">
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center text-elementcolor font-semibold text-2xl">
                  Primary Source Verification
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  We conduct Primary Source Verification for credentialing,
                  including board certification, license, and hospital
                  privileges checks, ensuring accuracy and reliability directly
                  from the source.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-semibold text-elementcolor text-2xl">
                  Management of Documents
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  Efficiently manage and securely store healthcare provider
                  documents, including certifications and licenses, for
                  streamlined access and regulatory compliance by using Allstars
                  secure credentialing management system.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-semibold text-elementcolor text-2xl">
                  NPI Regestration
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  AllStars streamlines NPI Registration for both Type 1
                  (individuals) and Type 2 (organizations), ensuring efficient
                  and accurate identification in healthcare billing.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-semibold text-elementcolor text-2xl">
                  CAQH Profile Management/Reattestation
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  AllStars excels in CAQH Profile Management and Reattestation,
                  ensuring hassle-free maintenance of accurate healthcare
                  provider information.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-semibold text-elementcolor text-2xl">
                  Credentialing & Network Enrollment Analysis
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  AllStars offers expert Credentialing and Network Enrollment
                  Analysis, ensuring accuracy and compliance for streamlined
                  provider enrollment.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-semibold text-elementcolor text-2xl">
                  Revalidation and Re-credentialing
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  AllStars manages the crucial processes of Revalidation and
                  Re-credentialing, ensuring that healthcare providers maintain
                  current and compliant credentials for continued participation
                  in healthcare networks.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-semibold text-elementcolor text-2xl">
                  Weekly Follow Up
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  AllStars conducts proactive weekly follow-ups with insurance
                  companies, ensuring timely approvals and efficient processing
                  to meet your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-semibold text-elementcolor text-2xl">
                  Credentialing Audit
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  AllStars offers on-demand Credentialing Audits, ensuring a
                  thorough and timely examination of credentials to maintain
                  compliance and accuracy for healthcare providers.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-semibold text-elementcolor text-2xl">
                  IPA Enrollment
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  AllStars streamlines IPA (Independent Practice Association)
                  Enrollment, providing efficient and effective services for
                  healthcare providers to join and participate in independent
                  practice associations.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-semibold text-elementcolor text-2xl">
                  Telehealth Credentialing
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  AllStars specializes in Telehealth Medicine Credentialing,
                  ensuring healthcare providers are credentialed and compliant
                  for telehealth services, facilitating seamless and secure
                  virtual healthcare delivery.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-semibold text-elementcolor text-2xl">
                  EDI Setups
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  AllStars specializes in EDI (Electronic Data Interchange)
                  Setups, ensuring efficient and accurate electronic
                  communication for seamless data exchange between healthcare
                  entities.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-semibold text-elementcolor text-2xl">
                  ERA Setups
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  AllStars excels in ERA (Electronic Remittance Advice) Setups,
                  offering seamless solutions for healthcare entities to
                  streamline and optimize the electronic processing of payment
                  information.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-semibold text-elementcolor text-2xl">
                  EFT Enrollment
                </h1>
                <p className="text-center pt-4 text-gray-500">
                  AllStars specializes in EFT (Electronic Funds Transfer)
                  Enrollment, streamlining the process for healthcare providers
                  to efficiently receive electronic payments, enhancing
                  financial transactions in the healthcare industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MedicalCredentialing;
