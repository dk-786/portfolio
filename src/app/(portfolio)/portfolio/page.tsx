import React from "react";
import ProjectDesign from "../components/ProjectDesign";
import ImageSlider from "../components/ImageSlider";
import { MarqueeStrip } from "@/components/common/MarqueeStripProps";
import Container from "@/components/common/Container";
import { ProjectGrid } from "@/components/common/ProjectCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import Card from "@/app/(service)/components/Card";
import { cardDataOne } from "@/utils/constant/constant";

const page = () => {
  return (
    <>
      <ProjectDesign />
      <ImageSlider />

      <div className="py-20 lg:py-30 rounded-4xl  bg-[#111212] mt-30">
      
        <MarqueeStrip  text="Work"/>
        <Container>
          <section className="text-white py-16 border-y border-[#2f3030] mt-15 ">
            <div className="max-w-6xl mx-auto  px-0 lg:px-6 space-y-12">
              <ProjectGrid startIndex={0} endIndex={2} withDivider />
              <ProjectGrid startIndex={2} endIndex={4} withDivider />
              <ProjectGrid startIndex={4} endIndex={6} />
            </div>
          </section>
        </Container>
      </div>
      <div className="mt-30">
        <SectionHeader
          title="Working process"
          description="Over a decade of experience in interactive design and working with some of the most talented people in the business"
          noBorderBottom
        />
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardDataOne.map((card) => (
            <Card
              key={card.number}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
        </Container>
      </div>
    </>
  );
};

export default page;
