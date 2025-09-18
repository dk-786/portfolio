"use client";
import Image from "next/image";
import React, { useCallback } from "react";

interface HeroAboutProps {
  sectionNumber: string;
  sectionTitle: string;
  name: string;
  description: string;
  company: string;
  scrollTarget: number;
  cardData?: Array<{
    title: string;
    content: string;
  }>;
}

const HeroAbout: React.FC<HeroAboutProps> = ({
  sectionNumber,
  sectionTitle,
  name,
  description,
  company,
  scrollTarget,
  cardData = [],
}) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
  }, [scrollTarget]);

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="text-white w-full flex flex-col lg:flex-row justify-between px-4 sm:px-0 lg:px-6 py-10 lg:py-20 border-t border-[#2f3030] mt-16 lg:mt-28 gap-8 lg:gap-0">
        <div className="w-full lg:w-1/6 text-white text-base sm:text-lg mb-4 lg:mb-0 flex-shrink-0 flex items-center lg:items-start">
          {sectionNumber} {"//"} {sectionTitle}
        </div>

        <div className="w-full lg:w-2/3 space-y-4 lg:space-y-6 flex items-center">
          <p className="text-base sm:text-lg lg:text-2xl font-bold lg:indent-60">
            Hello, my name&apos;s{" "}
            <span className="text-yellow-400 font-medium">{name}</span>, {description}{" "}
            <span className="text-yellow-400 font-medium">{company}</span> as a
            senior web designer creating connected brands, product commerce, and
            web experiences.
          </p>
        </div>

        <div className="w-full lg:w-1/6 flex items-center lg:items-end justify-center lg:justify-end mt-6 lg:mt-0">
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
        </div>
      </div>

      {cardData.length > 0 && (
        <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="border border-[#2f3030] rounded-lg p-4 sm:p-6 bg-[#181818]"
              >
                <div className="space-y-2 px-2 sm:px-5 py-2 sm:py-3">
                  <h3 className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide">
                    {card.title}
                  </h3>
                  <div className="text-white text-base sm:text-lg font-semibold">
                    {card.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroAbout;
