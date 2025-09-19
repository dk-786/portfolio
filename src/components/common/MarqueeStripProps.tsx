import React from 'react'
import Marquee from "react-fast-marquee";

interface MarqueeStripProps {
    text?: string;
  }
  const StatItem = ({ label, outlined }: { label: string; outlined?: boolean }) => (
    <span
      className={`text-[4rem]  lg:text-[8rem] font-bold uppercase tracking-wider scale-y-125 lg:scale-y-145
      ${outlined ? "text-transparent stroke-text" : "text-white"}`}
      style={{
        lineHeight: "1.1",
        paddingBottom: "0.25em",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
  
  export const MarqueeStrip: React.FC<MarqueeStripProps> = ({ text = "WORK" }) => {
    const marqueeItems = [
      { label: text, outlined: false },
      { label: text, outlined: true },
      { label: text, outlined: false },
      { label: text, outlined: true },
    ];
  
    return (
      <div className="w-full flex items-center justify-center pt-10">
        <Marquee gradient={false} speed={70} direction="left">
          <div
            className="
              flex items-center justify-center gap-6 lg:gap-16 px-8 lg:px-8
              h-28 lg:h-56
              overflow-hidden
            "
            style={{
              minHeight: "4.5rem",
            }}
          >
            {marqueeItems.map((item, idx) => (
              <StatItem key={idx} {...item} />
            ))}
          </div>
        </Marquee>
      </div>
    );
  };
  