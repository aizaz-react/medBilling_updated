import React from "react";
import Container from "./Container";
import { infoNavItems } from "../utils/data";
import { Link } from "react-router-dom";

const InfoNav = () => {
  return (
    <div>
      <div className={"bg-blue w-full mx-auto lg:block hidden"}>
        <Container className={"flex justify-between items-center py-2"}>
          <div className="flex flex-row text-center justify-between text-white">
            {infoNavItems.rightSide.map((item, i) => (
              <a key={i} href={item.link} className="flex items-center">
                {item.icon && (
                  <span className="text-white mx-3 cursor-pointer">
                    {item.icon}
                  </span>
                )}
              </a>
            ))}
          </div>
          <div className="flex flex-row text-center">
            {infoNavItems.leftSide.map((item, i, array) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                 rel="noreferrer"
                className="flex items-center cursor-pointer text-white"
              >
                {item.icon && (
                  <span className="text-white ml-3">{item.icon}</span>
                )}
                <p
                  className={`text-white font-Lato ${
                    i === array.length - 1
                      ? ""
                      : "border-r-[#DDDDDD2E] border-r-[0.05rem]"
                  } px-2`}
                >
                  {item.text}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default InfoNav;
