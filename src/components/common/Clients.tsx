"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { testimonials as defaultTestimonials } from "@/utils/constant/constant";
import "swiper/css";
import "swiper/css/navigation";
import Container from "./Container";


const Clients = () => {
  const source = defaultTestimonials;
  const doubledTestimonials = [
    ...source,
    ...source.map((t) => ({ ...t, id: t.id + source.length })),
  ];

  return (
    <Container>
      <section className="text-white w-full px-0 lg:px-20 ">
        <div className="mb-16 ">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{ prevEl: "#prevBtn", nextEl: "#nextBtn" }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="p-12"
          >
            {doubledTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="flex justify-center">
                <div className="flex flex-col justify-between h-full bg-transparent">
                  <div className="flex p-4">
                    <Image src="/client.svg" alt="Quote" width={60} height={60} />
                  </div>
                  <p className="w-full max-w-full  lg:w-80 text-lg p-4 text-justify">
                    {testimonial.feedback}
                  </p>
                  <div className="flex items-center rounded-2xl gap-4 p-4 border-t border-[#2F3030]">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#2F3030]"
                    />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-yellow-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Container>
  );
};

export default Clients;
