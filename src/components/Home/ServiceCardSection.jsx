import React from "react";
import { serviceCardList } from "../../utils/data";
import Card from "./Card";

const ServiceCardSection = () => {
  return (
    <div className="z-[1] md:mx-20 mx-5 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {serviceCardList.map((item, index) => (
        <Card
          icon={item.icon}
          title={item.title}
          description={item.description}
          key={index}
        />
      ))}
    </div>
  );
};

export default ServiceCardSection;
