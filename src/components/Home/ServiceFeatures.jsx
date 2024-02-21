import React from "react";
import { servicesData } from "../../utils/data";

const ServiceFeatures = () => {
  return (
    <div className="mt-10 mx-10 md:mx-28">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-14">
        {servicesData.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <img
              src={feature.icon}
              className="float-left w-[50px] h-[50px] object-contain"
            />
            <div>
              <h2 className="font-Oswald md:text-xl font-bold">
                {feature.title}
              </h2>
              <p className="font-Lato text-gray-500">{feature.description}</p>
              <ul className="pricing-items">
                {feature.items &&
                  feature.items.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;
