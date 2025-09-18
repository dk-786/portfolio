"use client";
import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
  avatar: string;
}

interface ClientsProps {
  sectionNumber?: string;
  sectionTitle?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <div className="flex flex-col justify-between h-full bg-transparent">
    <div className="flex p-4">
      <Image src="/client.svg" alt="Quote" width={60} height={60} />
    </div>
    <p className="w-full max-w-full  lg:w-80 text-lg p-4">{testimonial.feedback}</p>
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
);

const Clients: React.FC<ClientsProps> = ({
  sectionNumber = "06",
  sectionTitle = "SATISFIED CLIENTS",
  subtitle = "Our happy customers give us impactful and positive feedback on our services, customer supports & etc.",
  testimonials,
}) => {
  const doubledTestimonials = [
    ...testimonials,
    ...testimonials.map((t) => ({ ...t, id: t.id + testimonials.length })),
  ];

  return (
    <section className="text-white w-full px-0 lg:px-6 pt-20 border-t border-[#2F3030] mt-20">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center mb-16">
        <div className="text-lg uppercase mb-2 lg:mb-0 w-full lg:w-1/6 text-left">
          {sectionNumber} {"//"} {sectionTitle}
        </div>
        <div className="w-full lg:w-3/5 max-w-full lg:max-w-3xl space-y-4 lg:space-y-6 lg:ml-10">
          <p className="text-base lg:text-2xl font-bold break-words w-full" style={{ wordBreak: "break-word" }}>
            {subtitle}
          </p>
        </div>
        <div className="w-full flex justify-center gap-4 mt-4 lg:mt-0 lg:w-1/6 lg:justify-end">
          <button
            id="prevBtn"
            className="p-3 rounded-full border border-[#2F3030] hover:text-black hover:bg-[#ffbd4a] cursor-pointer"
          >
            <ChevronLeft className="w-8 h-8 lg:w-10 lg:h-10" />
          </button>
          <button
            id="nextBtn"
            className="p-3 rounded-full border border-[#2F3030] hover:text-black hover:bg-[#ffbd4a] cursor-pointer"
          >
            <ChevronRight className="w-8 h-8 lg:w-10 lg:h-10" />
          </button>
        </div>
      </div>

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
        {doubledTestimonials.map((t) => (
          <SwiperSlide key={t.id} className="flex justify-center">
            <TestimonialCard testimonial={t} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Clients;
