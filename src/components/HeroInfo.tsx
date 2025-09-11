"use client";

import React, { memo } from "react";
import Image from "next/image";
import { FaArrowDownLong } from "react-icons/fa6";
import { ABOUT_ME, WHAT_I_DO, CONTACT_ME, SOCIALS } from "@/utils/constant/constant";


const InfoSection = memo(function InfoSection({
  title,
  children,
  align = "left",
}: {
  title: string;
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={`w-10 h-10 border-2 border-[#959595] rounded-full flex items-center justify-center relative ${
          align === "right" ? "ml-auto" : ""
        }`}
      >
        <div className="absolute inset-0 bg-yellow-400 opacity-20 rounded-full blur-sm"></div>
        <span className="text-yellow-400 text-2xl z-10">✦</span>
      </div>
      <h2 className="text-2xl font-bold uppercase">{title}</h2>
      {children}
    </div>
  );
});

const AboutMe = memo(function AboutMe() {
  return (
    <InfoSection title={ABOUT_ME.title}>
      <p className="text-[#959595] leading-relaxed">{ABOUT_ME.description}</p>
    </InfoSection>
  );
});

const WhatIDo = memo(function WhatIDo() {
  return (
    <InfoSection title={WHAT_I_DO.title}>
      <p className="text-[#959595] leading-relaxed">{WHAT_I_DO.description}</p>
    </InfoSection>
  );
});

const ContactMe = memo(function ContactMe() {
  return (
    <InfoSection title={CONTACT_ME.title} align="right">
      <p className="text-[#959595]">Address: {CONTACT_ME.address}</p>
      <p className="text-[#959595]">Email: {CONTACT_ME.email}</p>
      <p className="text-[#959595]">Telephone number: {CONTACT_ME.phone}</p>
    </InfoSection>
  );
});

const FindWithMe = memo(function FindWithMe() {
  return (
    <InfoSection title="Find With Me" align="right">
      <div className="flex gap-3 lg:justify-end">
        {SOCIALS.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="bg-white text-black p-3 rounded-lg hover:bg-yellow-400 transition cursor-pointer"
          >
            <Icon />
          </a>
        ))}
      </div>
    </InfoSection>
  );
});

const CenterImage = memo(function CenterImage() {
  return (
    <div className="flex items-center justify-center">
      <div className="rounded-4xl bg-[#171818] h-[420px] w-[600px] flex items-center justify-center shadow-lg">
        <div className="rounded-3xl overflow-hidden w-full h-full flex items-center justify-center">
          <Image
            src="/user/1.png"
            alt="Profile"
            width={600}
            height={420}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
});

function HeroInfo() {
  return (
    <section className="relative w-full nicolas_sm_hero text-white py-20 h-[724px] p-15">
      <div className="absolute -top-14 -left-0 text-xl flex gap-2 items-center z-20">
        <span className="text-white mb-2">01 // 09 - scroll</span>
        <FaArrowDownLong className="animate-bounce w-6 h-6" />
      </div>

      <div className="overlay_bg absolute inset-0 rounded-[40px]" />

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 z-10 h-full w-full">
        <div className="flex flex-col justify-between w-60 pr-8">
          <AboutMe />
          <WhatIDo />
        </div>

        <CenterImage />

        <div className="flex flex-col justify-between h-full text-left lg:text-right pl-8">
          <ContactMe />
          <FindWithMe />
        </div>
      </div>

      <style jsx>{`
        .overlay_bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("https://nikolas-next.vercel.app/_next/static/media/pattern.25aa6280.png");
          background-repeat: repeat;
          opacity: 0.3;
          border-radius: 40px;
          z-index: 2;
        }
        .overlay_bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background-color: #171818;
          border-radius: 40px;
          z-index: 1;
        }
      `}</style>
    </section>
  );
}

export default memo(HeroInfo);
