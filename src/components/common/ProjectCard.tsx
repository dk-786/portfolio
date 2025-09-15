"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export type Project = {
    id: number;
    category: string;
    title: string;
    image: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="group rounded-2xl overflow-hidden flex flex-col">
            {/* Image */}
            <div className="relative w-full h-84 overflow-hidden rounded-4xl">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                    priority={false}
                />
            </div>

            {/* Text content */}
            <div className="flex justify-between items-start px-5 py-6 relative">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#ffbd4a] hover:text-white transition cursor-pointer">
                        {`// ${project.category}`}
                    </p>
                    <h3 className="text-2xl font-semibold text-white mt-2 hover:text-[#ffbd4a] transition cursor-pointer">
                        {project.title}
                    </h3>
                </div>

                {/* Arrow button */}
                <button className="w-16 h-16 flex items-center justify-center rounded-md border border-[#2f3030] text-white hover:bg-[#ffbd4a] hover:text-black transition cursor-pointer">
                    <ArrowUpRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
