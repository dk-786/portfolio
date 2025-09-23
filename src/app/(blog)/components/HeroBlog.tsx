"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogs } from "@/utils/constant/constant";
import Container from "@/components/common/Container";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const HeroBlog = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper: { realIndex: number }) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <Container>
      <div className="w-full h-[560px] rounded-2xl mt-10 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={700}
          loop={true}
          onSlideChange={handleSlideChange}
          breakpoints={{
            1024: {
              slidesPerView: 1,
            },
          }}
          className="w-full h-full rounded-2xl"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="relative w-full h-[560px] overflow-hidden rounded-2xl">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  quality={100}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                <div className="absolute bottom-0 left-0 w-[52%]">
                  <div className="bg-[#171818] px-12 py-8 h-60 rounded-lg">
                    <p className={`text-lg text-white flex items-center gap-2 mb-2 transition-all duration-700 transform ${
                      activeSlide === index 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-[-20px]'
                    }`}>
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      {blog.date}
                    </p>
                    <h2 className={`text-2xl lg:text-4xl font-bold leading-tight text-white mb-3 hover:text-[#ffbd4a] cursor-pointer transition-all duration-700 delay-200 transform ${
                      activeSlide === index 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-[-30px]'
                    }`}>
                      {blog.title}
                    </h2>
                    <p className={`text-[#959595] text-lg transition-all duration-700 delay-400 transform ${
                      activeSlide === index 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-[-40px]'
                    }`}>
                      {blog.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default HeroBlog;
