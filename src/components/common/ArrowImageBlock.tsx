"use client";
import React from "react";
import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";

type ArrowImageBlockProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  arrowWrapperClassName?: string;
};

export default function ArrowImageBlock({
  src,
  alt,
  width = 1000,
  height = 1000,
  sizes = "(max-width: 1024px) 100vw, 800px",
  className = "relative flex flex-col",
  imageClassName = "w-full h-full rounded-4xl shadow-2xl object-cover",
  arrowWrapperClassName = "absolute -top-15 left-1/2 -translate-x-1/2",
}: ArrowImageBlockProps) {
  return (
    <div className={className}>
      <div className={arrowWrapperClassName}>
        <div
          className="relative w-20 h-20 lg:w-30 lg:h-30 rounded-full group bg-[#171818] border-[#171818] hover:bg-[#ffbd4a] hover:text-black border-12 flex items-center justify-center transition-colors duration-350 cursor-pointer"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 1550, behavior: "smooth" });
            }
          }}
        >
          <BsArrowDown className="text-[#ffbd4a] text-5xl group-hover:text-black transition duration-350" />
        </div>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={imageClassName}
      />
    </div>
  );
}
