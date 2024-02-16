import React from "react";
import { cardList } from "../../utils/data";
import Card from "./Card";

const CardSection = () => {
  return (
    <div className="z-[1] md:mx-10 mx-5 mt-[-3rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cardList.map((item, index) => (
        <Card title={item.title} description={item.description} key={index} />
      ))}
    </div>
  );
};
export default CardSection;
