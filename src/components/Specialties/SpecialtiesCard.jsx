import React from "react";
import { specialitescard } from "../../utils/data";

const ServiceCardSection = () => {
  return (
    <div className="z-[1] md:mx-20 mx-5 my-10 md:my-16 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-6">
      {specialitescard.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center border-b-2 border-black pb-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 object-cover rounded-full"
          />
          <h1 className="font-Oswald text-center mt-2 text-elementcolor text-xl font-bold">
            {item.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ServiceCardSection;
