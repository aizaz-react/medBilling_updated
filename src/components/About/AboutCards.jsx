import React from "react";
import { aboutCardData } from "../../utils/data";

const AboutCards = () => {
  return (
    <div className="md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:mx-20 mx-5">
        {aboutCardData.map((card, index) => (
          <div
            className={`flex flex-col min-h-[200px] h-full border ${card.borderColor}`}
          >
            <div className="p-6 flex flex-col">
              <img
                src={card.icon}
                className="float-left w-[50px] h-[50px] object-contain mx-auto"
              />
              <h1
                className={`text-center font-bold text-2xl ${card.titleColor}`}
              >
                {card.percentage}
              </h1>
              <h2
                className={`text-center font-bold text-blue pt-5 ${card.titleColor}`}
              >
                {card.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCards;
