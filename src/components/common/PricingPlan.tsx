"use client";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { myPricingPlans } from "@/utils/constant/constant";
import Container from "./Container";

interface PricingPlanData {
    id: number;
    name: string;
    price: number;
    features: string[];
}

interface PricingPlanProps {
    sectionNumber?: string;
    sectionTitle?: string;
    description?: string;
    actionText?: string;
    plans: PricingPlanData[];
}

const PricingCard: React.FC<{ plan: PricingPlanData }> = ({ plan }) => (
    <div className="flex flex-col h-full w-full max-w-full bg-[#181818] rounded-xl border border-[#2F3030]">
        <div className="p-6 lg:p-8">
            <h3 className="text-lg lg:text-2xl mb-2">{plan.name}</h3>
            <div className="flex items-end mb-4">
                <span className="text-2xl lg:text-5xl font-bold">
                    ${plan.price}
                </span>
                <span className="text-base lg:text-xl font-medium text-[#959595]">
                    /month
                </span>
            </div>
            <p className="text-xs lg:text-sm text-[#959595] mb-6">
                10% taxes will include after make price
            </p>
            <ul className="flex-grow space-y-3 mb-4 border-t border-[#2F3030] pt-6">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-[#ffbd4a] mr-3" />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
        <button
            className="flex items-center justify-between w-full px-6 lg:px-8 py-4 mt-auto text-[#fff] rounded-lg hover:bg-[#ffbd4a] border-t border-[#2F3030] transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            Start My Project Now
            <GoArrowUpRight className="w-5 h-5 ml-2" />
        </button>
    </div>
);

const PricingPlan: React.FC<PricingPlanProps> = ({
    sectionNumber = "07",
    sectionTitle = "Pricing plan",
    description = "Your pricing page is a prime opportunity to take control of the price conversation and make it even easier for people to buy.",
    actionText = "(( Service All ))",
}) => {
    return (
        <Container>
            <section className="text-[#fff] w-full px-4 sm:px-6 pt-12 lg:pt-20 border-t border-[#2F3030] mt-20">
                {/* Responsive header layout */}
                <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0 mb-8">
                    <div className="w-full lg:w-1/6 text-base lg:text-lg uppercase flex-shrink-0 mb-2 lg:mb-0">
                        {sectionNumber} {"//"} {sectionTitle}
                    </div>
                    <div className="w-full lg:w-2/3 space-y-4 lg:space-y-6">
                        <p className="text-base sm:text-lg lg:text-3xl font-medium lg:indent-40">
                            {description}
                        </p>
                    </div>
                    <div className="w-full lg:w-1/6 flex justify-start lg:justify-end mt-2 lg:mt-0">
                        {actionText}
                    </div>
                </div>
                {/* Responsive grid: 1 col on mobile, 2 on md, 3 on lg+ */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 lg:pt-12">
                    {myPricingPlans.map((plan) => (
                        <PricingCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </section>
        </Container>
    );
};

export default PricingPlan;