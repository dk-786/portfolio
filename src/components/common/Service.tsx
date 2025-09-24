"use client"
import Image from "next/image";
import React from "react";
import { items } from "@/utils/constant/constant";
import Container from "./Container";
import { useRouter } from "next/navigation";

const Service = () => {
  const router = useRouter();
  return (
    <Container>
      {items.length > 0 && (
        <section className="w-full text-white py-2 lg:py-16">
          <div className="max-w-5xl mx-auto  relative">
            <ul>
              {items.map((item, index) => (
                <li
                  key={index}
                  className="relative flex items-center justify-between border-b border-white group cursor-pointer py-12 pb-0"
                  onClick={() => router.push("/service_single")} >
                  <div className="flex items-center flex-1 w-full">
                    <span className="w-12 min-w-[3rem] text-lg font-medium tracking-widest text-gray-400 flex-shrink-0">
                      {item.num}
                    </span>
                    <h2 className="flex-1 text-2xl sm:text-3xl lg:text-5xl font-bold group-hover:text-gray-200 transition ml-2 lg:ml-4 whitespace-nowrap overflow-hidden text-ellipsis w-full">
                      {item.title}
                    </h2>
                  </div>

                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-normal ease-out- pointer-events-none z-10">
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
    </Container>
  );
};

export default Service;
