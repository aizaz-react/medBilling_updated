import React from "react";
import { GoArrowRight } from "react-icons/go";
import { pricingData } from "../../utils/data";

const PricingCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 md:mx-20 md:my-20 mx-5 mb-16">
      {pricingData.map((data, index) => (
        <div key={index} className="rounded-md p-4 custom-shadow">
          <h1 className="font-Oswald text-xl font-bold text-blue">
            {data.title}
          </h1>
          {data.subtitle && (
            <h3 className="font-Oswald text-lg py-3">{data.subtitle}</h3>
          )}
          {data.items.map((item, i) => (
            <React.Fragment key={i}>
              <p className="font-Lato pt-2 text-md flex flex-row items-center gap-3">
                <GoArrowRight className="text-blue" /> {item}
              </p>
              {i !== data.items.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
