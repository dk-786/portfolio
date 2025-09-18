"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { TfiArrowTopRight } from "react-icons/tfi";

interface SectionHeaderProps {
  number: string;
  title: string;
  actionText?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title, actionText }) => (
  <section className="text-white w-full flex flex-col lg:flex-row justify-between px-0 lg:px-0 lg:px-6 pt-20 border-t border-[#2F3030] gap-4 lg:gap-0">
    <div className="w-full lg:w-1/6 text-lg uppercase mb-2 lg:mb-0">
      {number} {"//"} {title}
    </div>
    <div className="w-full lg:w-1/6 flex justify-start lg:justify-end uppercase ">
      {actionText}
    </div>
  </section>
);

interface Project {
  id: number;
  category: string;
  title: string;
  image: string;
}

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden rounded-4xl mb-6">
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={400}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="flex justify-between items-start px-5 py-6 relative">
      <div>
        <p className="text-md font-semibold uppercase tracking-wide text-[#ffbd4a] hover:text-white transition duration-350">
          {"//"} {project.category}
        </p>
        <h3 className="text-2xl font-semibold text-white mt-2 hover:text-[#ffbd4a]  transition duration-350">
          {project.title}
        </h3>
      </div>

      <button className="hidden lg:flex w-16 h-16 items-center justify-center rounded-md bg-[#111] border border-[#2f3030] text-white hover:bg-[#ffbd4a] hover:text-black transition duration-350">
        <TfiArrowTopRight size={20} />
      </button>
    </div>
  </div>
);

const StatItem = ({ label, outlined }: { label: string; outlined?: boolean }) => (
  <span
    className={`text-[4rem]  lg:text-[8rem] font-bold uppercase tracking-wider scale-y-125 lg:scale-y-145
    ${outlined ? "text-transparent stroke-text" : "text-white"}`}
    style={{
      lineHeight: "1.1",
      paddingBottom: "0.25em",
      display: "inline-block",
    }}
  >
    {label}
  </span>
);

interface MarqueeStripProps {
  text?: string;
}

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({ text = "WORK" }) => {
  const marqueeItems = [
    { label: text, outlined: false },
    { label: text, outlined: true },
    { label: text, outlined: false },
    { label: text, outlined: true },
  ];

  return (
    <div className="w-full flex items-center justify-center pt-10">
      <Marquee gradient={false} speed={70} direction="left">
        <div
          className="
            flex items-center justify-center gap-6 lg:gap-16 px-8 lg:px-8
            h-28 lg:h-56
            overflow-visible
          "
          style={{
            // Ensure enough height and no clipping on mobile
            minHeight: "4.5rem",
          }}
        >
          {marqueeItems.map((item, idx) => (
            <StatItem key={idx} {...item} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

interface ProjectGridProps {
  projects: Project[];
  withDivider?: boolean;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, withDivider }) => (
  <>
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 lg:gap-16 pt-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    {withDivider && <div className="border-t border-[#2f3030]" />}
  </>
);
