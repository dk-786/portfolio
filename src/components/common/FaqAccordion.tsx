"use client";
import React, { useState } from "react";
import Container from "./Container";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
  className?: string;
  title?: string;
};

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  defaultOpenIndex = 0,
  className = "",
  title,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
    <div className={`min-h-screen flex items-center justify-center py-4 px-4 lg:px-8 font-sans ${className}`}>
      <div className=" w-full space-y-8">
        {title ? (
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">{title}</h1>
          </div>
        ) : null}

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`
                 rounded-lg p-4 transition-all duration-300
                border-1 border-[#2f3030]
                ${openIndex === index ? 'border-[#ffbd4a]' : ''}
              `}
            >
              <div
                className="flex justify-between items-center cursor-pointer select-none group"
                onClick={() => handleItemClick(index)}
              >
                <h2
                  className={`
                    text-md font-semibold transition-all duration-300
                    ${openIndex === index ? 'text-[#ffbd4a]' : 'text-white'} group-hover:text-[#ffbd4a]
                  `}
                >
                  {item.question}
                </h2>
                <span
                  className={`
                    text-white transition-transform duration-300 transform group-hover:text-[#ffbd4a]
                    ${openIndex === index ? 'rotate-180' : 'rotate-0'}
                  `}
                >
                  {/* Using inline SVG to avoid external icon deps here. Consumers can swap via composition if needed. */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'}
                `}
              >
                <p className="text-gray-400 text-sm lg:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Container>
  );
};

export default FaqAccordion;


