import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: [
        "Awesome Feature",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
        "Hudai Feature",
        "Ajaira Feature",
      ],
    },
    {
      id: 2,
      name: "Medium",
      price: 9.99,
      features: [
        "Everything on Free",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
        "Hudai Feature",
        "Ajaira Feature",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 19.99,
      features: [
        "Everything on Premium",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
        "Hudai Feature",
        "Ajaira Feature",
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-5xl font-bold bg-indigo-300 p-12 text-white">
        Best deal of this month
      </h2>
      <div className="grid md:grid-cols-3 gap-3 mt-4">
        {pricingOptions.map((option) => (
          <PricingOption key={option.key} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
