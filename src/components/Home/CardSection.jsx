import React from "react";
import { cardList } from "../../utils/data";

const CardSection = () => {
  return (
    <div className="z-[1] md:mx-10 mx-5 mt-[-3rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Services Section */}
      {cardList.map((item, index) => (
        <div
          key={index}
          className="flex flex-col rounded-lg min-h[300px] h-full bg-white shadow-md dark:bg-neutral-700"
        >
          <div className="p-6">
            <h1 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {item.title}
            </h1>

            <div className="h-1 w-[12rem] bg-blue mt-1 mb-1 mx-auto"></div>
            <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
