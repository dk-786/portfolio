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

// Responsive SectionHeader: mobile (below 1024px) is stacked, desktop (1024px+) is row
export const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title, actionText }) => (
  <section className="text-white w-full flex flex-col lg:flex-row justify-between px-6 pt-20 border-t border-[#2F3030]">
    <div className="w-full lg:w-1/6 text-lg uppercase mb-2 lg:mb-0">
      {number} / {title}
    </div>
    <div className="w-full lg:w-1/6 flex justify-end uppercase">
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

// Responsive ProjectCard: image height and text scale for mobile
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
            // {project.category}
          </p>
          <h3 className="text-2xl font-semibold text-white mt-2 hover:text-[#ffbd4a]  transition duration-350">
            {project.title}
          </h3>
        </div>

        {/* Arrow button (hidden on mobile screens) */}
        <button className="hidden lg:flex w-16 h-16 items-center justify-center rounded-md bg-[#111] border border-[#2f3030] text-white hover:bg-[#ffbd4a] hover:text-black transition duration-350">
          <TfiArrowTopRight size={20} />
        </button>
      </div>
  </div>
);

const StatItem = ({ label, outlined }: { label: string; outlined?: boolean }) => (
  <span
    className={`text-4xl sm:text-6xl md:text-8xl scale-y-145 lg:text-[8rem] font-bold uppercase tracking-wider 
    ${outlined ? "text-transparent stroke-text" : "text-white"}`}
  >
    {label}
  </span>
);

interface MarqueeStripProps {
  text?: string;
}

// Responsive MarqueeStrip: height and gap scale for mobile
export const MarqueeStrip: React.FC<MarqueeStripProps> = ({ text = "WORK" }) => {
  const marqueeItems = [
    { label: text, outlined: false },
    { label: text, outlined: true },
    { label: text, outlined: false },
    { label: text, outlined: true },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <Marquee gradient={false} speed={70} direction="left">
        <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-16 px-2 sm:px-4 md:px-8 h-24 sm:h-40 md:h-56 overflow-hidden">
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

// Responsive ProjectGrid: 1 col on mobile, 2 on md (768px+), 3 on lg (1024px+)
export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, withDivider }) => (
  <>
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 pt-6 md:pt-10">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    {withDivider && <div className="border-t border-[#2f3030]" />}
  </>
);
