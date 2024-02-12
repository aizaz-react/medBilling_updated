import React from "react";
import logo from "../images/main-logo.webp";
import { navLinks, services } from "../utils/data";

const Navbar = () => {
  return (
    <div className="z-10 sticky top-0 flex flex-row justify-between items-center bg-white py-2 pr-12 pl-12 shadow-sm z-">
      <a href="/" className="block">
        <img className="h-16 cursor-pointer" src={logo} alt="mainLogo"></img>
      </a>
      <div className="flex flex-row justify-between">
        {navLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`${
              item.title === "Services" && "group"
            } text-md font-semibold leading-6 text-gray-900 mx-3 hover:text-blue focus:text-blue`}
          >
            {item.title}
            {item.title === "Services" && <ServiceModal />}
          </a>
        ))}
      </div>
      <div>
        <button className="btn bg-blue h-12 rounded-md text-white font-semibold px-8 hover:bg-sky-700 md:block hidden">
          Request a Call Back
        </button>
      </div>
    </div>
  );
};

export default Navbar;

const ServiceModal = () => {
  return (
    <div className="invisible group-hover:visible hover:visible md:block hidden max-w-[900px] absolute top-14 duration-100 ease-in-out inset-0 md:mx-auto my-auto mx-6">
      <div className="bg-white border border-gray-300 px-6 flex flex-col gap-4">
        <h1 className="font-bold text-2xl text-gray-700 py-4 border-b-[1px] border-gray-300">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <a href={item.link} key={index}>
              <h1 className=" flex flex-col gap-2 text-left mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 w-max">
                {item.title}
                <span className="w-full h-1 bg-blue" />
              </h1>
              <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
