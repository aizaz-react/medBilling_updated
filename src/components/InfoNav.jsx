import React from "react";
import Container from "./Container";
import { infoNavItems } from "../utils/data";

const InfoNav = () => {
  return (
    <div>
      <div className={"bg-blue w-full mx-auto md:block hidden"}>
        <Container className={"flex justify-between items-center py-2"}>
          <div className="flex flex-row text-center">
            {infoNavItems.leftSide.map((item, i, array) => (
              <div key={i} className="flex items-center cursor-pointer">
                {item.icon && (
                  <span className="text-white ml-3">{item.icon}</span>
                )}
                <p
                  className={`text-white ${
                    i === array.length - 1
                      ? ""
                      : "border-r-[#DDDDDD2E] border-r-[0.05rem]"
                  } px-2`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-row text-center justify-between text-white">
            {infoNavItems.rightSide.map((item, i) => (
              <div key={i} className="flex items-center">
                {item.icon && (
                  <span className="text-white mx-3 cursor-pointer">
                    {item.icon}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default InfoNav;
