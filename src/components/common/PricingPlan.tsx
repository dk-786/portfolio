"use client";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { myPricingPlans } from "@/utils/constant/constant";
import Container from "./Container";

const PricingPlan = () => {
  return (
    <Container>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 lg:px-20">
        {myPricingPlans.map((plan) => (
          <div
            key={plan.id}
            className="flex flex-col h-full w-full max-w-full bg-[#181818] rounded-xl border border-[#2F3030] "
          >
            <div className="px-6 lg:px-8 py-10 lg:py-14">
              <h3 className="text-lg lg:text-2xl mb-2">{plan.name}</h3>
              <div className="flex items-end mb-4">
                <span className="text-2xl lg:text-5xl font-bold">${plan.price}</span>
                <span className="text-base lg:text-xl font-medium text-[#959595]">
                  /month
                </span>
              </div>
              <p className="text-xs lg:text-sm text-[#959595] mb-6">
                10% taxes will include after make price
              </p>
              <ul className="flex-grow space-y-3 mb-4 border-t border-[#2F3030] pt-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-[#959595]">
                    <span className="w-2 h-2 rounded-full bg-[#ffbd4a] mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="flex items-center justify-between w-full px-8  py-4 mt-auto text-[#fff] rounded-lg hover:bg-[#ffbd4a] border-t border-[#2F3030] transition-colors"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              Start My Project Now
              <GoArrowUpRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PricingPlan;
