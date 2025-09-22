"use client";
import React from "react";
import { experiences } from "@/utils/constant/constant";
import Container from "@/components/common/Container";

const ExperienceList: React.FC = () => {
  return (
    <Container>
      <div className="w-full space-y-4 px-0 lg:px-20">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex  justify-between 
                     bg-[#171818] text-[#fff] border border-[#2f3030] 
                     rounded-md px-6 py-12"
          >
            <div className="text-xl font-semibold ">{exp.company}</div>
            <div className="text-xl font-semibold ">{exp.role}</div>
            <div className="text-xl font-semibold  ">{exp.period}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ExperienceList;
