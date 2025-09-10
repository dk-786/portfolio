"use client";

import React, { memo } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

const SOCIALS = [
  {
    href: "#",
    label: "Facebook",
    icon: <FaFacebookF />,
  },
  {
    href: "#",
    label: "Twitter",
    icon: <FaTwitter />,
  },
  {
    href: "#",
    label: "Instagram",
    icon: <FaInstagram />,
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  {
    href: "#",
    label: "Behance",
    icon: <FaBehance />,
  },
];

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
    <div className="flex flex-col gap-3 ">
      <div
        className={`w-10 h-10 border-2 border-[#959595] rounded-full flex items-center justify-center relative  ${
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
    <InfoSection title="About Me">
      <p className="text-gray-300 leading-relaxed">
        Hello, my name’s Nikolas, I'm a web designer and developer.
        Duis dolor in reprehenderit velit in esse cillum fugiat nulla pariatur.
      </p>
    </InfoSection>
  );
});

const WhatIDo = memo(function WhatIDo() {
  return (
    <InfoSection title="What I Do">
      <p className="text-gray-300 leading-relaxed">
        Website Design & Logo / Mobile Application Design / UI/UX Mobile Design /
        Web Developments / Brand Identity
      </p>
    </InfoSection>
  );
});

const ContactMe = memo(function ContactMe() {
  return (
    <InfoSection title="Contact Me" align="right">
      <p className="text-gray-300">Address: 45 Kofi Annan St, Ghana</p>
      <p className="text-gray-300">Email: contact@example.com</p>
      <p className="text-gray-300">nikolasraio@gmail.com</p>
      <p className="text-gray-300">Telephone number: 004-400-45</p>
    </InfoSection>
  );
});

const FindWithMe = memo(function FindWithMe() {
  return (
    <InfoSection title="Find With Me" align="right">
      <div className="flex gap-3 lg:justify-end">
        {SOCIALS.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="bg-white text-black p-3 rounded-lg hover:bg-yellow-400 transition"
          >
            {icon}
          </a>
        ))}
      </div>
    </InfoSection>
  );
});

const CenterImage = memo(function CenterImage() {
  return (
    <div className="flex items-center justify-center">
      <div className="rounded-4xl bg-[#171818] h-[500px] w-[500px] flex items-center justify-center shadow-lg">
        <div className="rounded-3xl overflow-hidden w-full h-full flex items-center justify-center">
          <Image
            src="/user/1.png"
            alt="Profile"
            width={500}
            height={500}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
});

function HeroInfo() {
  return (
    <section className="relative w-full nicolas_sm_hero text-white py-20 h-[724px]">
      {/* Overlay Background */}
      <div className="overlay_bg absolute inset-0 rounded-[40px]" />

      {/* Content */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 z-10 h-full w-full px-0 md:px-0 lg:px-0">
        {/* Left Column */}
        <div className="flex flex-col justify-between w-60">
          <AboutMe />
          <WhatIDo />
        </div>

        {/* Center Image */}
        <CenterImage />

        {/* Right Column */}
        <div className="flex flex-col justify-between h-full text-left lg:text-right">
          <ContactMe />
          <FindWithMe />
        </div>
      </div>

      {/* Custom CSS */}
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
