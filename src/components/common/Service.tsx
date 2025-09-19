import Image from "next/image";
import React from "react";
import { SectionHeader } from "./SectionHeader";
import { items } from "@/utils/constant/constant";

const Service = () => {
  return (
    <>
      <SectionHeader
        number="03"
        title="My services"
        actionText="((Service All))"
        description="Our work builds more loyal audiences by combining an unwavering focus on their needs and desires, and our relentless pursuit of design excellence."
      />

      {items.length > 0 && (
        <section className="w-full text-white py-2 lg:py-16">
          <div className="max-w-5xl mx-auto  relative">
            <ul>
              {items.map((item, index) => (
                <li
                  key={index}
                  className="relative flex items-center justify-between border-b border-white group cursor-pointer py-12 pb-0"
                >
                  <div className="flex items-center flex-1 w-full">
                    <span className="w-12 min-w-[3rem] text-lg font-medium tracking-widest text-gray-400 flex-shrink-0">
                      {item.num}
                    </span>
                    <h2 className="flex-1 text-2xl sm:text-3xl lg:text-5xl font-bold group-hover:text-gray-200 transition ml-2 lg:ml-4 whitespace-nowrap overflow-hidden text-ellipsis w-full">
                      {item.title}
                    </h2>
                  </div>

                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={320}
                      height={320}
                      className="w-80 h-80 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Service;
