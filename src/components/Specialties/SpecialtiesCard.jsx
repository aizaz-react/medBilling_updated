import React from "react";
import { specialitescard } from "../../utils/data";

const ServiceCardSection = () => {
  return (
    <div className="z-[1] md:mx-20 mx-5 my-10 md:my-16 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
      {specialitescard.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-center pb-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 object-cover rounded-ful"
          />
          <h1 className="font-Oswald mt-2 text-elementcolor text-sm font-bold">
            {item.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ServiceCardSection;
