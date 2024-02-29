import "../App.css";
import Container from "../components/Container";
import React, { useState, useEffect } from "react";
import "../Header.css";
import PrimaryImage from "../images/primary-bg.jpg";
import MainCodingImage from "../images/Main3.png";
import DynamicImage from "../images/positive_dynamic.svg";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import InfoNav from "../components/InfoNav";
import CertifiedIcon from "../svgicons/certified.svg";
import CodingAuditsIcon from "../svgicons/coding-audits.svg";
import CostEffectiveIcon from "../svgicons/cost-effective.svg";

function MedicalCoding() {
  return (
    <div>
      <InfoNav />
      <Nav />
      <div className="relative">
        <img src={PrimaryImage} alt="PrimaryImage" className="w-full h-44" />

        <h1 className="font-Oswald text-white text-4xl font-bold absolute top-16 md:left-16 left-[75px]">
          Medical Coding
        </h1>
      </div>
      <div className="bg-darkgray md:flex gap-44 md:px-20 pt-16 md:pt-0 px-5">
        <div className="md:w-1/2 md:my-16">
          {/* Left section */}
          <h1 className="font-Oswald flex flex-col w-max gap-2 md:text-2xl text-[22px]">
            Medical Coding Services
            <span className="w-full h-1 bg-blue" />
          </h1>
          <p className="pt-4 font-Lato">
            The healthcare industry is continuously evolving, but we have the
            expertise and insight to help your practice thrive. We stay updated
            on the latest coding changes and advancements to offer you the most
            comprehensive medical coding services. Our certified medical coders
            are skilled in coding for all major specialties, including
            outpatient and inpatient coding.
            <br />
            We meticulously review all claims and make necessary adjustments
            before submission. Our medical coding solutions are straightforward
            and adaptable, ensuring precise medical documentation, error-free
            claim submissions, and efficient practice workflows. This allows you
            to dedicate more time to providing quality care coordination to your
            patients. <br />
            Our team is coding-certified and ready to provide medical practices
            with accurate diagnoses and procedural codes for proper
            reimbursement. With nearly a decade of industry experience, we
            understand how to navigate the complexities of healthcare billing
            and coding effectively.
          </p>
          <button className="font-Oswald bg-blue mt-12 text-white px-5 py-2 rounded-md font-semibold float-left shadow-lg hover:bg-sky-700">
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
      s
      <div className="md:mt-16 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 mx-5 md:mx-20">
        <div className="flex flex-col p-6 h-full border border-borderstyledark hover:border-blue">
          {/* <img className="w-16 h-16 mx-auto" src={CertifiedIcon}></img> */}
          <h1 className="font-Oswald text-center text-elementcolor font-semibold text-2xl">
            Licensed Medical Coders
          </h1>
          <p className="font-Lato text-center pt-4 text-gray-500">
            With the assistance of our licensed medical coding specialists, your
            project will experience a significant reduction in claim denial
            rates. Our coders utilize the best-in-class coding tools and
            industry resources available.
          </p>
        </div>
        <div className="flex flex-col p-6 h-full border border-borderstyledark hover:border-blue">
          {/* <img className="w-16 h-16 mx-auto" src={CodingAuditsIcon}></img> */}
          <h1 className="font-Oswald text-center font-semibold text-elementcolor text-2xl">
            Coding Validation
          </h1>
          <p className="font-Lato text-center pt-4 text-gray-500">
            Our regular coding validations, conducted daily, monthly, quarterly,
            and yearly, set us apart from competitors. We provide both scheduled
            and on-demand coding validations to our clients at no extra charge.
          </p>
        </div>
        <div className="flex flex-col p-6 h-full border border-borderstyledark hover:border-blue">
          {/* <img className="w-16 h-16 mx-auto" src={CostEffectiveIcon}></img> */}
          <h1 className="font-Oswald text-center font-semibold text-elementcolor text-2xl">
            Efficient Coding Techniques
          </h1>
          <p className="font-Lato text-center pt-4 text-gray-500">
            Utilizing our medical coding services is a cost-effective decision,
            providing value without compromising quality. Our services ensure
            accurate coding, compliance, and optimized revenue streams for your
            practice.
          </p>
        </div>
      </div>
      <div className="bg-darkgray md:mt-20 mt-10 md:py-20 pb-14 md:mx-20 mx-5">
        {/* <img
            src={DynamicImage}
            className="h-auto max-h-[35rem] md:w-1/2"
          ></img> */}

        <h1 className="font-Oswald md:text-2xl text-xl flex flex-col w-max mx-auto">
          Unlocking Your Full Reimbursement Potential
          <span className="w-full h-1 bg-blue" />
        </h1>
        <p className="pt-4 font-Lato text-center">
          At Skrisentech Inc Medical Coding Services, we understand the critical
          role coding accuracy plays in your revenue stream. Our commitment is
          to maximize your reimbursement by ensuring precise coding. Efficiency
          is the cornerstone of our coding process, and our team comprises
          highly efficient and experienced professionals, each with a minimum of
          five years of experience.
        </p>
        <p className="pt-3 font-Lato text-center">
          We are meticulous in avoiding two common errors in coding. Down-coding
          can result in reimbursements that do not reflect the services
          provided, which is why we are dedicated to accurate coding practices.
        </p>
        <p className="font-Lato text-center"></p>
        <p className="pt-1 font-Lato text-center">
          Our certified coders (CPC) are proficient in ICD-10-CM, LMRP, CPT
          Assistant, and HCPCS Level II. We diligently cross-verify diagnoses
          with procedural codes, applying the appropriate modifiers as
          necessary.
        </p>
        <p className="pt-3 font-Lato text-center">
          To ensure the utmost accuracy, our senior coding staff conducts audits
          to verify the codes assigned. Our dedicated quality assurance team
          goes above and beyond to ensure error-free coding, resulting in
          maximum reimbursement and minimizing, if not eliminating, claim
          denials. With Skrisentech Inc, you can trust our expertise to optimize
          your revenue while maintaining precise coding practices.
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default MedicalCoding;
