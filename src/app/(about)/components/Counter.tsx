"use client";
import React, { useEffect, useState, useRef } from "react";
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
        <div className="flex">
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

  useEffect(() => {
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

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  const animateCounter = () => {
    let start = 0;
    const end = skill.percentage;
    const duration = 1500; // 1.5s
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
  };

  return (
    <div
      ref={ref}
      className="flex items-center justify-center rounded-full border border-[#2f3030]"
      style={{
        width: "300px",
        height: "300px",
        marginLeft: index !== 0 ? "-30px" : "0",
        zIndex: total - index,
      }}
    >
      <div
        className="flex flex-col items-center justify-center rounded-full gap-4 
                   hover:bg-[#111212] transition-all duration-300"
        style={{
          width: "240px",
          height: "240px",
        }}
      >
        <div className="mb-2 flex justify-center items-center">
          <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
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
