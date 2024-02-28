import React from "react";
import { cardList } from "../../utils/data";
import Card from "./Card";

const CardSection = () => {
  return (
    <div className=" md:mx-10 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:mt-5">
      {cardList.map((item, index) => (
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

export default CardSection;
