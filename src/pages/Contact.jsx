import "../App.css";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import "../Header.css";
import PrimaryImage from "../images/primary-bg.jpg";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import InfoNav from "../components/InfoNav";

function Contact() {
  return (
    <div>
      <InfoNav />
      <Nav />
      <div className="relative">
        <img src={PrimaryImage} alt="Brud" className="w-full h-44" />

        <h1 className="font-Oswald text-white text-4xl font-bold absolute top-16  left-[120px] hover:bg-sky-700">
          Contact Us
        </h1>
        <p className="absolute font-Lato md:left-[120px] top-28 text-white md:text-lg text-center">
          If you have any concerns, we would be happy to help you resolve it.
        </p>
      </div>
      <div className="mt-20 mx-5 sm:flex md:flex md:mx-20 md:py-5">
        <div
          className="mx-3 flex-1 mb-10 flex flex-col rounded-lg min-h[200px] p-6"
          style={{ boxShadow: "0px 0px 18px 0px rgba(0,0,0,.16)" }}
        >
          <a href="tel:+15014240123">
            <div className=" flex flex-col items-center text-center">
              <LuPhoneCall
                style={{
                  color: "#008ac6",
                  marginRight: "10px",
                  fontSize: "35px",
                }}
              />
              <p className="font-Lato font-semibold md:pt-0 pt-3">
                +15513408448
              </p>
              <p className="font-Lato">Call Today</p>
            </div>
          </a>
        </div>
        <div
          className="mx-3 flex-1 mb-10 flex flex-col rounded-lg min-h[200px] p-6"
          style={{ boxShadow: "0px 0px 18px 0px rgba(0,0,0,.16)" }}
        >
          <a href="Skrisentech Inc.com">
            <div className=" flex flex-col items-center text-center">
              <IoMailOutline
                style={{
                  color: "008ac6",
                  marginRight: "10px",
                  fontSize: "40px",
                }}
              />
              <a
                href="mailto:contact@skrisentechinc.com"
                className="font-Lato font-semibold md:pt-0 pt-3"
              >
                contact@skrisentechinc.com
              </a>
              <p className="font-Lato">Feel Free To Mail Us</p>
            </div>
          </a>
        </div>
        <div
          className="mx-3 flex-1 mb-10 flex flex-col rounded-lg min-h[200px] p-6"
          style={{ boxShadow: "0px 0px 18px 0px rgba(0,0,0,.16)" }}
        >
          <a href="https://maps.app.goo.gl/w9cMqt6LUfA9Httd9">
            <div className=" flex flex-col items-center text-center">
              <IoLocationOutline
                style={{
                  color: "008ac6",
                  marginRight: "10px",
                  fontSize: "40px",
                }}
              />
              <p className="font-Lato font-semibold md:pt-0 pt-3">
                Lewisville, TX 75067 USA
              </p>
              <p className="font-Lato">Texas Office</p>
            </div>
          </a>
        </div>
      </div>
      {/* Locations & Contact section */}
      <div className="bg-darkgray">
        <div className="mt-10 md:mt-5 mx-8 md:mx-20 md:py-16">
          <h1 className="text-2xl font-Oswald flex flex-col w-max">
            Get in Touch
            <span className="h-1 bg-blue"></span>
          </h1>
          <div className="w-full">
            <div className="items-center py-8 md:flex flex-col gap-4">
              <div className="flex flex-col gap-4 w-full md:flex md:flex-row">
                <input
                  type="text"
                  className="font-Lato flex-1 border bg-darkgray p-3 focus:outline-none border-borderstyledark"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="font-Lato flex-1 border bg-darkgray border-borderstyledark p-3  focus:outline-none"
                  placeholder="Email Address"
                />
              </div>
              <div className="font-Lato flex flex-col gap-4 w-full md:flex md:flex-row pt-4">
                <input
                  type="text"
                  className="font-Lato border bg-darkgray border-borderstyledark p-3 focus:outline-none flex-1"
                  placeholder="Phone No."
                />
                <select className="font-Lato border bg-darkgray border-borderstyledark p-3 focus:outline-none flex-1">
                  <option value="" disabled selected>
                    -Service-
                  </option>
                  <option value="category1">Medical Billing</option>
                  <option value="category2">Medical Coding</option>
                  <option value="category3">Credentialing</option>
                  <option value="category3">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-4 w-full md:flex md:flex-row pt-4">
                <select className="font-Lato border bg-darkgray border-borderstyledark p-3 focus:outline-none flex-1">
                  <option value="" disabled selected>
                    -State-
                  </option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
                <input
                  type="date"
                  className="font-Lato border bg-darkgray border-borderstyledark p-3 focus:outline-none flex-1"
                  placeholder="Pick a date"
                />
              </div>
              {/* Textarea */}
              <div className="flex flex-col w-full pt-4">
                <textarea
                  className="font-Lato border bg-darkgray border-borderstyledark p-4 md:p-2 focus:outline-none h-28 md:h-36 "
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="font-Oswald bg-blue text-white border rounded-md border-white mt-4 px-4 py-2 transition mr-auto hover:bg-sky-700"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107044.90032324655!2d-97.05807892769134!3d33.02609580628027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2e7ab18c0633%3A0x53a2143debb7064b!2sLewisville%2C%20TX%2075067%2C%20USA!5e0!3m2!1sen!2s!4v1708974600736!5m2!1sen!2s"
        height="400"
        style={{ border: "0" }}
        allowFullScreen={true}
        referrerPolicy="no-referrer-when-downgrade"
        className="my-5 md:pr-20 md:pl-20 w-full"
      ></iframe>
      <Footer />
    </div>
  );
}

export default Contact;
