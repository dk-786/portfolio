"use client"
import Image from "next/image";
import React, { useCallback } from "react";

interface HeroAboutProps {
  sectionNumber?: string;
  sectionTitle?: string;
  name?: string;
  description?: string;
  company?: string;
  scrollTarget?: number;
  cardData?: Array<{
    title: string;
    content: string;
  }>;
}

const HeroAbout: React.FC<HeroAboutProps> = ({
  sectionNumber = "02",
  sectionTitle = "ABOUT ME",
  name = "Darshak Vaddroiya",
  description = "I'm a bay-area born designer based in Ahmedabad. I'm currently at",
  company = "Envoy",
  scrollTarget = 2200,
  cardData = []
}) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
  }, [scrollTarget]);

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className=" text-white w-full flex justify-between px-6 py-20 border-t-1 border-[#2f3030] mt-28">
        <div className="w-1/6 text-white text-lg ">
          {sectionNumber} / {sectionTitle}
        </div>
        <div className="space-y-6 w-2/3">
          <p className="text-xl md:text-1xl lg:text-2xl font-bold indent-60">
            Hello, my name&apos;s{' '}
            <span className="text-yellow-400 font-medium">{name}</span>, {description}{' '}
            <span className="text-yellow-400 font-medium">{company}</span> as a senior web designer creating connected brands, product commerce, and web experiences.
          </p>
        </div>

        <div className="w-1/6 flex items-end justify-end">
          <div className="relative w-32 h-32 flex items-end">
            <Image
              src="/user/scroll.82d59462.png"
              alt="Scroll Down"
              fill
              className="object-contain animate-spin-slow"
            />
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={scrollToTop}>
              <div className="text-yellow-400 text-4xl ">↓</div>
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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className=" border border-[#2f3030] rounded-lg p-6  "
              >
                <div className="space-y-2 px-5 py-3">
                  <h3 className="text-gray-400 text-sm font-medium tracking-wide">
                    {card.title}
                  </h3>
                  <div className="text-white text-lg font-semibold ">
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
