import Container from "@/components/common/Container";
import React from "react";
import { projectDesignData } from "@/utils/constant/constant";


const ProjectDesign = () => {
  return (
    <Container>
      <section className="bg-[#171818] text-white flex flex-col items-center justify-center py-12 ">
        <div className="flex flex-col items-center justify-center w-full text-center scale-y-100 lg:scale-y-135">
          {projectDesignData.map((line, lineIdx) => (
            <div
              key={lineIdx}
              className="flex flex-wrap items-center justify-center gap-x-4"
            >
              {line.map((item, idx) => (
                <h2
                  key={idx}
                  className={`text-5xl font-bold uppercase ${item.className ? item.className : ""}`}
                >
                  {item.text}
                </h2>
              ))}
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default ProjectDesign;
