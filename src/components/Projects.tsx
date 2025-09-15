"use client";
import Marquee from "react-fast-marquee";
import React from "react";
import Container from "./common/Container";
import ProjectCard from "./common/ProjectCard";
import { projects } from "@/utils/constant/constant";

const StatItem = ({ label, outlined }: { label: string; outlined?: boolean }) => {
    return (
        <span
            className={`text-7xl md:text-8xl scale-y-145 overflow-hidden lg:text-[8rem] font-bold uppercase tracking-wider 
        ${outlined ? "text-transparent stroke-text" : "text-white"}`}
        >
            {label}
        </span>
    );
};

const Projects = React.memo(() => {
    const marqueeItems = [
        { label: "WORK", outlined: false },
        { label: "WORK", outlined: true },
        { label: "WORK", outlined: false },
        { label: "WORK", outlined: true },
        { label: "WORK", outlined: false },
        { label: "WORK", outlined: true },
    ];

    return (
        <div className="py-30 rounded-4xl bg-[#111212]">
            <Container>
                <section className="text-white w-full flex justify-between px-6 pt-20 border-t border-[#2F3030]">
                    <div className="w-1/6 text-lg uppercase">04 // let me show you</div>
                    <div className="w-1/6 flex justify-end uppercase">((Project ALL))</div>
                </section>
            </Container>


            <div className="w-full flex items-center justify-center ">
                <Marquee gradient={false} speed={70} direction="left" pauseOnHover={false}>
                    <div className="flex items-center justify-center gap-16 px-8 h-56">
                        {marqueeItems.map((item, idx) => (
                            <StatItem key={idx} {...item} />
                        ))}
                    </div>
                </Marquee>
            </div>
            <section className="text-white py-16 border-y border-[#2f3030] mt-15">
                <div className="max-w-6xl mx-auto px-6 space-y-12">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {projects.slice(0, 2).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    <div className="border-t border-[#2f3030] "></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-10">
                        {projects.slice(2, 4).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <div className="border-t border-[#2f3030]"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-10">
                        {projects.slice(4, 6).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
});

Projects.displayName = "Projects";

export default Projects;
