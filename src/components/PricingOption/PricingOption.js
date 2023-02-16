import React from "react";
import Feature from "../Feature/Feature";

const PricingOption = ({ option }) => {
  const { features } = option;
  return (
    <div className="bg-indigo-300 m-3 rounded p-3">
      <div>
        <p>
          <span className="text-6xl font-bold text-white">{option.price}</span>
          <span className="text-2xl text-gray-200 ">/mon</span>
        </p>
        <p className="text-3xl my-4">{option.name}</p>
      </div>
      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="bg-green-500 mt-2 w-full rounded-md py-2 text-white font-bold">
        Buy Now
      </button>
    </div>
  );
};

export default PricingOption;
