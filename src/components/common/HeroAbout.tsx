"use client";
import { cardData } from "@/utils/constant/constant";
import Container from "./Container";

const HeroAbout = () => {
  return (
    <Container>
      <section className="flex flex-col items-center justify-center w-full ">

        {cardData.length > 0 && (
          <div className="w-full max-w-6xl mx-auto mt-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-6">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="border border-[#2f3030] rounded-lg p-4 bg-[#181818] lg:p-6"
                >
                  <div className="space-y-2 px-2 py-2 lg:px-5 lg:py-3">
                    <h3 className="text-gray-400 text-xs font-medium tracking-wide lg:text-sm">
                      {card.title}
                    </h3>
                    <div className="text-white text-base font-semibold lg:text-lg">
                      {card.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </Container>
  );
};

export default HeroAbout;
