import "../App.css";
import Container from "../components/Container";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { LiaFaxSolid } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidBuildingHouse } from "react-icons/bi";
import "../Header.css";
import logo from "../images/main-logo.webp";
import banner from "../images/Banner-img.png";
import aboutimage from "../images/ABout.png";
import PrimaryImage from "../images/primary-bg.jpg";
import MissionImage from "../images/goals.png";
import VisionImamge from "../images/vision.png";
import serviceAimnImage from "../images/amin3.png";
import Footer from "../components/Footer";
import InfoNav from "../components/InfoNav";
import Nav from "../components/Nav";
import AboutCards from "../components/About/AboutCards";

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

// header
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

function About() {
  return (
    <div>
      <InfoNav />
      <Nav />

      <div className="relative">
        <img
          src={PrimaryImage}
          alt="PrimaryImage"
          className="w-full md:h-44 h-44"
        />

        <h1 className="text-white text-4xl font-bold absolute top-16 md:left-16 left-32">
          About Us
        </h1>
      </div>
      {/* About */}
      <div className="md:pb-[5rem] pb-8 flex mx-5 md:mx-20 mt-14 md:mt-14">
        <div className="md:flex justify-between gap-8">
          <div className="md:w-2/5 order-2 md:order-1">
            <img
              className="rounded-md"
              src={aboutimage}
              alt="Aboutimage"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="md:w-2/3 mt-8 md:order-2">
            <h1 className="flex flex-col w-max gap-2 text-2xl font-bold text-left ml-3">
              About Skrisentech Inc Medical Billing
              <span className="w-full h-1 bg-blue" />
            </h1>
            <p className="mt-6 ml-3 line-clamp-7">
              Effective billing management is a critical component of any
              successful medical practice. By entrusting this responsibility to
              the experts at Skrisentech Inc Medical Billing Solutions, you can
              free up your staff and medical professionals to focus on what
              matters most: providing top-notch patient care.
            </p>
            <p className="md:mt-6 mt-3 md:ml-3 line-clamp-7">
              With a wealth of experience in the field, our billing
              professionals are dedicated to helping healthcare providers
              optimize their revenue streams, reduce unnecessary expenses, and
              streamline their business operations. Skrisentech Inc Medical
              Billing Solutions offers a comprehensive end-to-end revenue cycle
              management solution tailored to over 50 medical specialties across
              the United States.
            </p>
            <button className="bg-blue mt-10 md:mt-16 text-white px-5 py-2 rounded-md font-semibold float-right shadow-lg hover:bg-sky-700">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <AboutCards />

      {/* Mission section */}
      <div className="bg-darkgray md:mt-14 mt-10 md:flex justify-between mx-5 md:mx-20 items-center md:py-10 pt-14">
        <div>
          <h1 className="font-bold text-2xl">
            Our <span className="text-blue">Mission</span>
          </h1>
          <div className="h-1 w-[8.5rem] bg-blue"></div>
          <p className="pt-5 md:pr-32">
            At Skrisentech Inc Medical Billing, our purpose is to empower
            healthcare providers by alleviating the complexities of medical
            billing. We are dedicated to optimizing revenue streams, minimizing
            costs, and enhancing operational efficiency for over 50 medical
            specialties across the United States. Our unwavering commitment is
            to enable healthcare professionals to dedicate their full attention
            to patient care, while we expertly manage claims, payments, and
            patient statements with precision and speed. We are steadfast in our
            mission to ensure accuracy from the outset, eliminating the
            underlying causes of billing errors and providing peace of mind to
            our clients.
          </p>
        </div>
        <div className="pt-5">
          <img
            className="h-auto max-w[100%]:"
            src={MissionImage}
            alt="MissionImage"
            style={{ width: "1300px" }}
          ></img>
        </div>
      </div>
      {/* Vision section */}
      <div className="md:mt-14 md:flex justify-between mx-5 md:mx-20 items-center py-10">
        <div className="md:order-1 md:pl-32">
          <h1 className="font-bold text-2xl">
            Our <span className="text-blue">Vission</span>
          </h1>
          <div className="h-1 w-[8.5rem] bg-blue"></div>
          <p className="pt-5">
            We aim to be the leading partner for healthcare practices seeking
            financial excellence. Our goal is to set the standard for excellence
            in medical billing, credentialing, medical accounts receivable
            management, and practice billing audit services. Leveraging our
            extensive healthcare billing experience, we envision a future where
            healthcare providers can trust us completely to enhance their
            financial performance. This trust will enable them to provide
            exceptional services to their patients with unwavering confidence
            and peace of mind.
          </p>
        </div>
        <img
          className="h-auto w-full"
          src={VisionImamge}
          alt="VisionImamge"
          style={{ width: "300px" }}
        />
      </div>

      <Footer />
    </div>
  );
}

export default About;
