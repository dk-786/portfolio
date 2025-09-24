"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { skills } from "@/utils/constant/constant";
import Container from "@/components/common/Container";

// Define the type for one skill
interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

// Props type for SkillCircle
interface SkillCircleProps {
  skill: Skill;
  index: number;
  total: number;
}

const Counter = () => {
  return (
    <Container>
      <div className="flex items-center justify-center text-white px-4">
        <div className="flex flex-col gap-8 w-full items-center justify-center lg:flex-row lg:gap-0">
          {skills.map((skill, index) => (
            <SkillCircle
              key={index}
              skill={skill}
              index={index}
              total={skills.length}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

const SkillCircle: React.FC<SkillCircleProps> = ({ skill, index, total }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const animateCounter = useCallback(() => {
    let start = 0;
    const end = skill.percentage;
    const duration = 1500; 
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
  }, [skill.percentage]);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          animateCounter();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node); 
    };
  }, [hasAnimated, skill.percentage, animateCounter]);

  return (
    <div
      ref={ref}
      className={`
        flex items-center justify-center rounded-full border border-[#2f3030]
        w-full max-w-[350px] aspect-square
        lg:w-[300px] lg:h-[300px] lg:aspect-auto
        ${index !== 0 ? "lg:ml-[-30px]" : ""}
        `}
      style={{
        zIndex: total - index,
      }}
    >
      <div
        className={`
          flex flex-col items-center justify-center rounded-full gap-4
          hover:bg-[#111212] transition-all duration-300
          w-[80vw] h-[80vw] max-w-[280px] max-h-[280px]
          lg:w-[240px] lg:h-[240px]
        `}
      >
        <div className="mb-2 flex justify-center items-center">
          <Image src={skill.icon} alt={skill.name} width={48} height={48} />
        </div>
        <div>
          <div className="text-xl font-medium text-center">{skill.name}</div>
          <div className="text-4xl font-bold">{count}%</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
