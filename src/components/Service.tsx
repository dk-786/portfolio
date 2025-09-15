"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { items } from '@/utils/constant/constant';
const Service = () => {
  const [mouseY, setMouseY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredIndex !== index) return;
    const divRect = e.currentTarget.getBoundingClientRect();
    setMouseY(e.clientY - divRect.top); 
  };

  const handleMouseEnter = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    setHoveredIndex(index);
    const divRect = e.currentTarget.getBoundingClientRect();
    setMouseY(divRect.height / 2);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <>
      <section className="text-white w-full flex justify-between px-6 py-20 border-t border-b border-[#2F3030]">
        <div className="w-1/6 text-lg">03 // MY SERVICES</div>
        <div className="space-y-6 w-2/3">
          <p className="text-xl md:text-1xl lg:text-2xl font-bold indent-40">
            Our work builds more loyal audiences by combining an unwavering focus on their needs and desires, and our relentless pursuit of design excellence.
          </p>
        </div>
        <div className="w-1/6 flex justify-end">((SERVICE ALL))</div>
      </section>

      <section className="w-full text-white py-16">
        <div className="max-w-5xl mx-auto px-6 cursor-pointer">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between border-b border-white group gap-4 pt-12" 
              onMouseEnter={(e) => handleMouseEnter(index, e)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              {/* Text */}
              <div className="flex items-center flex-1 gap-4">
                <span className="w-12 text-lg font-medium tracking-widest text-gray-400 group-hover:text-[#ffbd4a]">
                  {item.num}
                </span>
                <h2 className="flex-1 text-3xl md:text-5xl font-bold transition group-hover:text-gray-200">
                  {item.title}
                </h2>
              </div>
              {/* Hover Image */}
              {hoveredIndex === index && (
                <div
                  className="absolute z-10  pointer-events-none transition-opacity duration-300 ease-out"
                  style={{
                    top: mouseY,
                    right: 0,
                    transform: 'translateY(-50%)',
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={320}
                    height={320}
                    className="object-cover rounded-xl shadow-lg aspect-square"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Service;