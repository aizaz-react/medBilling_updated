import React from "react";
import { billingCard } from "../../utils/data";
const BillingsCard = () => {
  return (
    <div className="md:mt-16 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-5 md:mx-20">
        {billingCard.map((item) => (
          <div key={item.title} className="flex-1">
            <div className="flex flex-col min-h-[200px] h-full border border-borderstyledark">
              <div className="p-6">
                {item.icon && <div className="w-8 h-8 mr-4">{item.icon}</div>}
                <h1 className="text-center font-bold text-xl text-elementcolor">
                  {item.title}
                </h1>
                <p className="text-center pt-3">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingsCard;
