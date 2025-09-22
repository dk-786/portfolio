import Container from "@/components/common/Container";
import React from "react";
import { titleLines } from "@/utils/constant/constant";

const Title = () => (
  <Container>
    <section className="bg-[#171818] text-white flex flex-col items-center justify-center py-12 mt-10">
      <div className="flex flex-col items-center justify-center w-full text-center scale-y-100 lg:scale-y-135">
        {titleLines.map((line, idx) => (
          <div
            key={idx}
            className="flex flex-wrap items-center justify-center gap-x-4"
          >
            {line.map(({ text, className }, i) => (
              <h2
                key={i}
                className={`text-5xl font-bold uppercase ${className}`}
              >
                {text}
              </h2>
            ))}
          </div>
        ))}
      </div>
    </section>
  </Container>
);

export default Title;
