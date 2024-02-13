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
import MainImage from "../images/Main.png";
import MedialIMage from "../images/medial.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";

function MedicalBilling() {
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
          <img src={Brud} alt="Brud" className="opacity-5 w-full h-44" />
        </div>
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
      {/* Cards Section */}
      <div className="md:mt-16 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-5 md:mx-20">
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-bold text-xl text-elementcolor">
                  98% Clean Clain acceptance
                </h1>
                <p className="text-center pt-3">
                  Welcome to AllStars, where excellence meets efficiency in
                  healthcare claims processing. We take immense pride in our
                  remarkable 98% clean claim acceptance rate, setting new
                  standards in the industry. Choose AllStars for a smoother,
                  more efficient claims experience. Your success is our
                  priority, and our 98% clean claim acceptance rate reflects our
                  unwavering commitment to your satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-bold text-xl text-elementcolor">
                  08% Monthly Denials
                </h1>
                <p className="text-center pt-3">
                  Enhancing Your Healthcare Revenue Cycle with AllStars - Only
                  8% Monthly Denials AllStars - Your trusted partner for
                  efficient revenue cycle management and a remarkably low 8%
                  monthly denials rate. Let us help you unlock your practice's
                  full financial potential.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-bold text-xl text-elementcolor">
                  96% electronic claim submission
                </h1>
                <p className="text-center pt-3">
                  AllStars - Your 96% Electronic Claim Submission Solution"
                  Choose AllStars for a hassle-free, efficient electronic claim
                  submission experience. Your success is our priority, and our
                  96% electronic claim submission rate reflects our unwavering
                  commitment to providing you with the best possible service.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-bold text-xl text-elementcolor">
                  99% Credentialing Success
                </h1>
                <p className="text-center pt-3">
                  "AllStars: Unlocking Success with a 99% Credentialing
                  Achievement" With AllStars as your credentialing partner, you
                  gain access to a team of experts who meticulously navigate the
                  complex world of credentialing. We work diligently to ensure
                  your applications are processed without errors and that your
                  providers can seamlessly participate in insurance networks,
                  allowing you to focus on providing exceptional patient care.
                </p>
              </div>
            </div>
          </div>
          {/* Add three more sets of similar card divs */}
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-bold text-xl text-elementcolor">
                  96% Bank Direct Depsoit
                </h1>
                <p className="text-center pt-3">
                  "AllStars: Your 96% Success Rate in Bank Direct Deposits"
                  Select AllStars for a dependable, efficient bank direct
                  deposit experience. Your financial well-being is our priority,
                  and our 96% success rate underscores our dedication to
                  providing you with the best possible service. With AllStars,
                  you can trust that your bank direct deposits will be processed
                  smoothly and securely, allowing you to maintain your focus on
                  your business.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-bold text-xl text-elementcolor">
                  10% - 15% Practise Growth
                </h1>
                <p className="text-center pt-3">
                  "AllStars: Fueling Your Practice Growth Experience significant
                  practice growth with AllStars. Our proven strategies have
                  consistently delivered impressive results, ranging from 10% to
                  15%. Partner with us to unlock your practice's full potential
                  and embark on a journey to lasting success."
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-bold text-xl text-elementcolor">
                  10Y Avg. Team Expertise
                </h1>
                <p className="text-center pt-3">
                  "AllStars: 10-Year Average Team Experience At AllStars, our
                  team boasts an impressive 10-year average experience. With a
                  decade of expertise, we provide you with seasoned
                  professionals who understand the industry inside out. Trust us
                  to bring unparalleled knowledge and skill to your healthcare
                  needs."
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                <h1 className="text-center font-bold text-xl text-elementcolor">
                  95% Electronic Payments
                </h1>
                <p className="text-center pt-3">
                  "AllStars: Your 95% Electronic Payments Partner Experience the
                  efficiency and reliability of AllStars with our outstanding
                  95% electronic payments success rate. We ensure your financial
                  transactions are processed seamlessly and securely, helping
                  you streamline your operations and stay on top of your
                  finances."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkgray mt-20">
        <div className="md:flex gap-16 md:mx-20 mx-5 md:py-20">
          <div>
            {/* left section */}
            <img src={MedialIMage} alt=""></img>
          </div>
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
