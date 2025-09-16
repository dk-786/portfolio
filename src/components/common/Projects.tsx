"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface SectionHeaderProps {
  number: string;
  title: string;
  actionText?: string;
}
export const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title, actionText }) => (
  <section className="text-white w-full flex justify-between px-6 pt-20 border-t border-[#2F3030]">
    <div className="w-1/6 text-lg uppercase">
      {number} / {title}
    </div>
    <div className="w-1/6 flex justify-end uppercase">{actionText}</div>
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
        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <div className="space-y-2">
      <p className="text-sm text-gray-400 uppercase tracking-wider">{project.category}</p>
      <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">
        {project.title}
      </h3>
    </div>
  </div>
);

const StatItem = ({ label, outlined }: { label: string; outlined?: boolean }) => (
  <span
    className={`text-7xl md:text-8xl scale-y-145 lg:text-[8rem] font-bold uppercase tracking-wider 
    ${outlined ? "text-transparent stroke-text" : "text-white"}`}
  >
    {label}
  </span>
);

export const MarqueeStrip: React.FC = () => {
  const marqueeItems = [
    { label: "WORK", outlined: false },
    { label: "WORK", outlined: true },
    { label: "WORK", outlined: false },
    { label: "WORK", outlined: true },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <Marquee gradient={false} speed={70} direction="left">
        <div className="flex items-center justify-center gap-16 px-8 h-56 overflow-hidden">
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-10">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    {withDivider && <div className="border-t border-[#2f3030]" />}
  </>
);
