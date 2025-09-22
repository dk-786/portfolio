"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { ReactNode } from "react";
import { FaPlay } from "react-icons/fa6";

type HeroSectionProps = {
  videoUrl?: string;
  playIcon?: ReactNode;
};

export default function HeroSection({ videoUrl, playIcon }: HeroSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <section className="bg-[#171818] text-white flex flex-col items-center justify-center py-12 ">
        <div className="flex flex-col items-center justify-center w-full text-center scale-y-100 lg:scale-y-135">
          <div className="flex flex-wrap items-center justify-center gap-x-4">
            <h2 className="text-5xl font-bold uppercase text-transparent text-stroke">
              Say Hi From
            </h2>
            <h2 className="text-5xl font-bold uppercase underline">
              Nicolas, Webflow
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4">
            <h2 className="text-5xl font-bold uppercase text-transparent text-stroke">
              Designer
            </h2>
            <h2 className="text-5xl font-bold uppercase">and Web</h2>
            <h2 className="text-5xl font-bold uppercase underline">
              Developer
            </h2>
          </div>
        </div>

        <div className="relative">
          <div className="mt-42 w-full rounded-4xl overflow-hidden">
            <Image
              src="/user/13.jpg"
              alt="profile"
              width={800}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>

          {videoUrl && (
            <button
              onClick={() => setIsOpen(true)}
              className="absolute z-10 lg:h-38 lg:w-38 h-30 w-30 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
              bg-[#ffbd4a] lg:border-[18px] border-[12px] border-[#171818] hover:border-[#ffbd4a] hover:bg-white
              rounded-full flex items-center justify-center cursor-pointer transition-colors group"
            >
              {playIcon || (
                <FaPlay className="lg:w-8 lg:h-8 h-5 w-5 text-[#171818] group-hover:text-[#ffbd4a] transition-colors" />
              )}
            </button>
          )}
        </div>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-26 right-95 text-white text-2xl font-bold hover:text-[#ffbd4a]"
            >
              ✕
            </button>
            <div className="relative w-[90%] max-w-3xl bg-black rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full aspect-video">
                <iframe
                  src={
                    videoUrl
                      ? videoUrl.replace("watch?v=", "embed/") + "?autoplay=1"
                      : ""
                  }
                  title="YouTube video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </Container>
  );
}
