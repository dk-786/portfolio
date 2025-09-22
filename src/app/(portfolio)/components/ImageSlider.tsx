"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/user/sliderone.jpg",
  "/user/slidertwo.jpg",
  "/user/sliderthree.jpg",
  "/user/sliderfour.jpg",
  "/user/1.jpg",
  "/user/2.jpg",
  "/user/3.jpg",
  "/user/4.jpg",
  "/user/5.jpg",
  "/user/6.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 >= images.length ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  max-w-full   flex flex-col items-center justify-center py-8">
      {/* Slider container */}
      <div className="overflow-hidden w-full rounded-xl   h-[400px] items-center  ">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 25}%) skewY(-1.5deg)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-1/4  p-2">
              <div className="w-full h-[300px] rounded-lg overflow-hidden  ">
                <Image
                  src={src}
                  alt={`Slide ${i + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative w-[94%]  h-1  mt-6 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-1 bg-yellow-400 transition-all duration-700"
          style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ImageSlider;
