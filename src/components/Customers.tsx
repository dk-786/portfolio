"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { customers } from "@/utils/constant/constant";
import Container from "@/components/common/Container";

const Customers = () => {
  return (
      <Container>
        <div className="border-y border-[#dcdad4] ">
          <Marquee speed={40} gradient={false}>
            {customers.map((item, i) => (
              <div
                key={i}
                className=" flex-shrink-0 flex items-center justify-center rounded-2xl border border-gray-300 bg-[#f3f1eb] shadow-sm mx-8 w-48 h-30"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={90}
                  height={40}
                  className="object-contain lg:w-[120px] lg:h-[60px]"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
  );
};

export default Customers;
