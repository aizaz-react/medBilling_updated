import React from "react";
import { credentialingCard } from "../../utils/data";

const CredentialingCards = () => {
  return (
    <div className="md:my-20 grid grid-cols-1 md:grid-cols-3 gap-8 mx-5 md:mx-20 my-12">
      {credentialingCard.map((service, index) => (
        <div key={index} className="flex-1">
          <div className="flex flex-col min-h-[200px] h-full border border-borderstyledark">
            <div className="p-6">
              {service.icon && (
                <div className="flex items-center justify-center mb-4">
                  {service.icon}
                </div>
              )}
              <h1 className="text-center text-elementcolor font-semibold text-2xl">
                {service.title}
              </h1>
              <p className="text-center pt-4 text-gray-500">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CredentialingCards;
