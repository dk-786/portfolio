"use client";

import React from "react";

export default function HeroIntro() {
    return (
        <section className="relative w-full bg-[#171818] text-white py-44  ">
            <div className="flex flex-col lg:flex-row items-center justify-between ">
                <div className="flex flex-col text-left w-full gap-2 scale-y-100 lg:scale-y-125 ">
                    <h2 className="text-5xl font-extrabold uppercase tracking-wide text-transparent stroke-text ">
                        Hello World! I&apos;m
                    </h2>
                    <h1 className="flex items-center text-5xl font-extrabold uppercase gap-6 ">
                        Darshak
                        <div className="relative hidden lg:block items-center w-full max-w-md mt-1">
                            <div className="w-full h-[2px] bg-gray-400"></div>
                            <div className="absolute right-0 flex flex-col items-center justify-center -translate-y-1/2 top-1/2">
                                <div className="w-6 h-6 border-b-2 border-l-2 border-gray-400 rounded-bl-full"></div>
                                <div className="w-6 h-6 border-t-2 border-l-2 border-gray-400 rounded-tl-full -mt-[2px]"></div>
                            </div>
                        </div>
                    </h1>
                </div>

                <div className="relative flex flex-col text-right mt-32 w-full scale-y-100 lg:scale-y-125">
                    <h1 className="text-5xl font-extrabold uppercase">
                        Web Developer
                    </h1>
                    <h2 className="text-4xl font-extrabold uppercase tracking-wide text-transparent stroke-text mt-2">
                        Based in Ahmedabad
                    </h2>
                </div>
            </div>

            <style jsx>{`
                .stroke-text {
                  -webkit-text-stroke: 1px white;
                  color: transparent;
                }
            `}</style>
        </section>
    );
}
