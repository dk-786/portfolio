"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "@/utils/constant/constant";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";



const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full max-w-full flex flex-col items-center justify-center py-8 mt-30 gap-20">
      <div className="w-full" style={{ transform: "skewY(-1.5deg)" }}>
        <Swiper
          modules={[Autoplay]}
          // Show 1 image on mobile, 4 on lg and up
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={10}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={700}
          loop={true}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          className="mySwiper w-full h-[350px] rounded-xl"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i} className="flex-shrink-0 p-2">
              <div className="relative w-full h-full rounded-lg overflow-hidden group">
                <Image
                  src={src}
                  alt={`Slide ${i + 1}`}
                  width={350}
                  height={350}
                  className="w-full h-full object-cover hover:scale-115 transition-transform duration-500 cursor-pointer"
                />
                {/* "Designing" overlay - top left */}
                <div className="absolute bottom-32 left-12 bg-white text-gray-800 px-6 py-2 rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xl font-medium">Designing</p>
                </div>
                {/* "UI/UX Design Mockup" overlay - center bottom */}
                <div className="absolute max-w-full w-[88%] bottom-6 -right-40 transform -translate-x-1/2 bg-white text-gray-800 px-8 py-4 rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-2xl font-bold">UI/UX Design Mockup</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative w-[94%] h-1 mt-6 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-1 bg-yellow-400 transition-all duration-700"
          style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ImageSlider;
