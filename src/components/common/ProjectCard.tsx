import React from "react";
import Image from "next/image";
import { TfiArrowTopRight } from "react-icons/tfi";

interface Project {
  id: number;
  category: string;
  title: string;
  image: string;
}

interface ProjectGridProps {
  projects: Project[];
  withDivider?: boolean;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  withDivider,
}) => (
  <>
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 lg:gap-16 pt-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    {withDivider && <div className="border-t border-[#2f3030]" />}
  </>
);

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
