import "../App.css";
import Container from "../components/Container";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import "../Header.css";
import PrimaryImage from "../images/primary-bg.jpg";
import DesignImage from "../images/design.webp";
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

        <h1 className="text-white text-4xl font-bold absolute top-16 md:left-16 left-[120px] hover:bg-sky-700">
          Contact Us
        </h1>
      </div>
      <div className="mt-20">
        <div className="md:flex mx-5 md:mx-20 md:py-5">
          <div className="mx-3 flex-1 mb-10">
            <div
              className="flex flex-col rounded-lg min-h[200px] h-full"
              style={{ boxShadow: "0px 0px 18px 0px rgba(0,0,0,.16)" }}
            >
              <div className="p-6">
                <a href="tel:+15014240123">
                  <div className=" flex flex-col items-center text-center">
                    <LuPhoneCall
                      style={{
                        color: "#008ac6",
                        marginRight: "10px",
                        fontSize: "35px",
                      }}
                    />

                    <p className="font-semibold md:pt-0 pt-3">(051) 4240123</p>
                    <p>Call Today</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-3 flex-1 mb-10">
            <div
              className="flex flex-col rounded-lg min-h[200px] h-full"
              style={{ boxShadow: "0px 0px 18px 0px rgba(0,0,0,.16)" }}
            >
              <div className="p-6">
                <a href="mailto:info@allstarsmb.com">
                  <div className=" flex flex-col items-center text-center">
                    <IoMailOutline
                      style={{
                        color: "008ac6",
                        marginRight: "10px",
                        fontSize: "40px",
                      }}
                    />
                    <p className="font-semibold md:pt-0 pt-3">
                      info@allstarsmb.com
                    </p>
                    <p>Feel Free To Mail Us</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-3 flex-1 mb-10">
            <div
              className="flex flex-col rounded-lg min-h[200px] h-full"
              style={{ boxShadow: "0px 0px 18px 0px rgba(0,0,0,.16)" }}
            >
              <div className="p-6">
                <a href="#">
                  <div className=" flex flex-col items-center text-center">
                    <IoLocationOutline
                      style={{
                        color: "008ac6",
                        marginRight: "10px",
                        fontSize: "40px",
                      }}
                    />
                    <p className="font-semibold md:pt-0 pt-3">
                      2121 N California Blvd Suite 243, Walnut Creek, CA 94596,
                      USA
                    </p>
                    <p>California Office</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Locations & Contact section */}
      <div className="bg-darkgray mt-10 md:mt-5">
        <div className="md:flex gap-14 mx-8 md:mx-20 md:py-16">
          <div className="md:w-1/2 pt-10 md:pt-0">
            {/* Left */}
            <h1 className="text-2xl">Our Locations</h1>
            <div className="h-1 w-[9rem] bg-blue"></div>
            <div className="felx-1 md:py-8 md:mt-0 mt-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6295.864071381195!2d-122.06452505191072!3d37.908651254732625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808561bd3ff82649%3A0x823c07820af525e0!2sAllStars%20Medical%20Billing!5e0!3m2!1sen!2s!4v1707299200723!5m2!1sen!2s"
                width="600"
                height="400"
                style={{ border: "0" }}
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full md:w-full h-[29rem] md:h-[29rem]"
              ></iframe>
            </div>
          </div>

          <div className="md:w-1/2 w-full md:mt-0 mt-10">
            {/* right  */}
            <h1 className="text-2xl">Contact Us</h1>
            <div className="h-1 w-[7rem] bg-blue"></div>
            <div className="flex-1">
              <div className="items-center py-8 md:flex flex-col gap-4">
                <div className="flex flex-col gap-4 w-full lg:w-full md:w-0 sm:flex sm:flex-row">
                  <input
                    type="text"
                    className=" flex-1 border bg-darkgray p-3 focus:outline-none border-borderstyledark"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className=" flex-1 border bg-darkgray border-borderstyledark p-3  focus:outline-none"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full lg:w-full md:w-0 sm:flex sm:flex-row pt-4">
                  <input
                    type="text"
                    className="border bg-darkgray border-borderstyledark p-3 focus:outline-none flex-1"
                    placeholder="Phone No."
                  />
                  <select className="border bg-darkgray border-borderstyledark p-3 focus:outline-none flex-1">
                    <option value="" disabled selected>
                      -Service-
                    </option>
                    <option value="category1">Medical Billing</option>
                    <option value="category2">Medical Coding</option>
                    <option value="category3">Credentialing</option>
                    <option value="category3">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-4 w-full lg:w-full md:w-0 sm:flex sm:flex-row pt-4">
                  <select className="border bg-darkgray border-borderstyledark p-3 focus:outline-none flex-1">
                    <option value="" disabled selected>
                      -State-
                    </option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </select>
                  <input
                    type="date"
                    className="border bg-darkgray border-borderstyledark p-3 focus:outline-none flex-1"
                    placeholder="Pick a Date"
                  />
                </div>

                {/* Textarea */}
                <div className="flex flex-col w-full pt-4">
                  <textarea
                    className="border bg-darkgray border-borderstyledark p-4 md:p-2 focus:outline-none h-28 md:h-36 "
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue text-white border rounded-md border-white mt-4 px-4 py-2 transition mr-auto hover:bg-sky-700"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
