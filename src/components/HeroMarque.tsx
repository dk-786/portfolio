"use client";
import Marquee from "react-fast-marquee";
import React from "react";
import {stats} from "@/utils/constant/constant"


const StatItem = ({ label, icon }: { label?: string; icon?: boolean }) => {
  if (icon) {
    return (
      <span className="text-5xl transition-colors duration-500 ">
        ✦
      </span>
    );
  }
  return (
    <span className="text-4xl scale-y-100 lg:scale-y-125 font-medium tracking-wide uppercase transition-colors duration-500 hover:text-white text-stroke-black-2">
      {label}
    </span>
  );
};

const StatsMarquee = React.memo(() => {
  const marqueeItems = [...stats, ...stats];

  return (
    <div className="w-full bg-[#171818] py-26">
      <div className="bg-[#f5f3ee] text-black">
        <Marquee gradient={false} speed={50} direction="left" pauseOnHover={false}>
          <div className="flex items-center gap-16 px-8 h-36">
            {marqueeItems.map((item, idx) => (
              <StatItem key={idx} {...item} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
});

StatsMarquee.displayName = 'StatsMarquee';

export default StatsMarquee;
