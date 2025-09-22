"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { awards } from "@/utils/constant/constant";
import Container from "@/components/common/Container";

const AwardsSection: React.FC = () => {
  return (
    <Container>
      <section className="w-full  text-white py-16 px-0 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="/user/18.png"
              alt="Designer"
              width={450}
              height={450}
              className="object-contain"
            />
          </div>

          <div className="divide-y divide-[#2f3030] border-t border-b border-[#2f3030]">
            {awards.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-8"
              >
                <div className="font-medium text-lg">{item.title}</div>

                <div className="flex items-center   gap-6">
                  <span className="px-4 py-2 rounded-full border border-[#2f3030]">
                    {item.award}
                  </span>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-[#2f3030] transition"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AwardsSection;
