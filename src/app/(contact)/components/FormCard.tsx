"use client";
import Container from "@/components/common/Container";
import React from "react";
import Image from "next/image";

const FormCard = () => {
  return (
    <Container>
      <div className="relative mt-10 rounded-2xl bg-[#111212] text-white shadow-lg p-8 lg:p-14">
        {/* Top Icon */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <div className="relative w-30 h-30 rounded-full bg-[#171818]  flex items-center justify-center">
            <span className="text-white text-3xl">↓</span>
          </div>
        </div>

        <div className="flex gap-8 mt-6">
          <div className="bg-[#171818] w-[45%] p-8 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold underline underline-offset-4 mb-6">
                Contact information
              </h3>

              <div className="mb-6">
                <p className="text-xs uppercase text-yellow-500 font-semibold">
                  Stay up to date
                </p>
                <p className="mt-2 font-bold">(+053) 625 08 09 62</p>
                <p className="text-white">kevincontact@gmail.com</p>
              </div>

              <div>
                <p className="text-xs uppercase text-yellow-500 font-semibold">
                  Address
                </p>
                <p className="mt-2 font-bold leading-relaxed">
                  223 Thatcher Road St, Brooklyn, Manhattan, NY 10463
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Facebook",
                "Twitter",
                "Instagram",
                "LinkedIn",
                "Dribbble",
                "Behance",
              ].map((social) => (
                <button
                  key={social}
                  className="px-4 py-1 rounded-full border border-gray-500 text-xs uppercase hover:bg-yellow-500 hover:text-black transition"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <form className="space-y-6 w-[55%] ml-30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md bg-[#1a1a1a] px-4 py-4 text-sm text-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md bg-[#1a1a1a] px-4 py-4 text-sm text-white focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-md bg-[#1a1a1a] px-4 py-4 text-sm text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full rounded-md bg-[#1a1a1a] px-4 py-4 text-sm text-white focus:outline-none"
              />
            </div>

            <textarea
              placeholder="Message"
              rows={4}
              className="w-full rounded-md bg-[#1a1a1a] px-4 py-4 text-sm text-white focus:outline-none"
            ></textarea>

            <div className="flex items-center gap-6">
              <span className="text-white font-semibold text-lg">9022</span>
              <input
                type="text"
                placeholder="Please Enter Code *"
                className="flex-1 rounded-md bg-[#1a1a1a] px-4 py-4 text-sm text-white focus:outline-none"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#ffbd4a] text-black font-semibold rounded-full w-24 h-24 flex items-center justify-center hover:bg-white duration-500 transition cursor-pointer"
              >
                Submit
                <Image
                  src="/user/arrow.png"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="rotate-180 ml-2"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default FormCard;
