"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./Container";

interface SectionHeaderProps {
  number?: string;
  title?: string;
  actionText?: string;
  description?: string;
  scrollTarget?: number;
  noBorderBottom?: boolean;
  showNavigation?: boolean;
  prevButtonId?: string;
  nextButtonId?: string;
  textColor?: string; 
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  actionText,
  description,
  scrollTarget,
  noBorderBottom,
  showNavigation = false,
  prevButtonId = "prevBtn",
  nextButtonId = "nextBtn",
  textColor,
  
}) => {
  const scrollToTop = useCallback(() => {
    if (scrollTarget !== undefined) {
      window.scrollTo({ top: scrollTarget, behavior: "smooth" });
    }
  }, [scrollTarget]);

  return (
    <Container>
      <section
        className={` w-full flex flex-col lg:flex-row justify-between px-0 lg:px-6  border-t-1 border-[#2f3030] gap-4 lg:gap-0 py-10 lg:py-16 
          ${noBorderBottom ? "" : "border-b"} ${textColor ?? "text-white"}
        `}
      >
        <div className="w-full lg:w-1/6 text-md  uppercase mb-2 lg:mb-0">
          {number} {"//"} {title}
        </div>

                <div className="w-full lg:w-2/3 space-y-4 lg:space-y-6 text-justify">
          <p className="text-base sm:text-lg lg:text-2xl font-bold lg:indent-40">
            {description}
          </p>
        </div>

                <div className="w-full lg:w-1/6 flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
          {showNavigation ? (
            <div className="w-full flex justify-center gap-4 mt-4 lg:mt-0 lg:w-1/6 lg:justify-end">
              <button
                id={prevButtonId}
                className="p-3 rounded-full border border-[#2F3030] hover:text-black hover:bg-[#ffbd4a] cursor-pointer"
              >
                <ChevronLeft className="w-8 h-8 lg:w-10 lg:h-10" />
              </button>
              <button
                id={nextButtonId}
                className="p-3 rounded-full border border-[#2F3030] hover:text-black hover:bg-[#ffbd4a] cursor-pointer"
              >
                <ChevronRight className="w-8 h-8 lg:w-10 lg:h-10" />
              </button>
            </div>
          ) : actionText ? (
            <div className="uppercase">{actionText}</div>
          ) : scrollTarget !== undefined ? (
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-end">
              <Image
                src="/user/scroll.82d59462.png"
                alt="Scroll Down"
                fill
                className="object-contain animate-spin-slow"
              />
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={scrollToTop}
              >
                <div className="text-yellow-400 text-3xl sm:text-4xl">↓</div>
              </div>
            </div>
          ) : null}
        </div>

                <style jsx global>{`
          .animate-spin-slow {
            animation: spin 10s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </section>
    </Container>
  );
};
