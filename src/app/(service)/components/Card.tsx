import React from "react";

interface CardProps {
  number: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border-1 border-dashed border-[#2f3030]   text-white transition px-16 py-22 ">
      <span className="text-[#ffbd4a] font-mono text-2xl">/{number}</span>
      <h3 className="text-3xl font-bold hover:text-[#ffbd4a] leading-snug transition duration-350 cursor-pointer">{title}</h3>
      <p className="text-neutral-400 leading-relaxed text-lg">
        {description}
      </p>
    </div>
  );
};

export default Card;
