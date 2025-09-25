"use client";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import Form from "./Form";
import React, { useCallback, memo } from "react";
import { SOCIAL_LINKS, CONTACTS, ADDRESS } from "@/utils/constant/constant";

const Footer = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className="text-white mt-30">
      <div className="w-full bg-[#111212]">
        <div className="extra_container max-w-7xl mx-auto flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 lg:pr-16 py-20 px-8">
            <h2 className="text-2xl font-semibold leading-snug mb-10 underline underline-offset-8">
              Feel free to reach out to me. <br />
              <span>I&apos;m always open to discuss new projects</span>
            </h2>

            <div className="mb-8">
              <h4 className="uppercase text-sm text-[#ffbd4a] font-semibold mb-8 underline underline-offset-8">
                Stay up to date
              </h4>
              {CONTACTS.map(({ type, value, href }) => (
                <p key={type} className="text-xl font-medium cursor-pointer">
                  <a href={href}>{value}</a>
                </p>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="uppercase text-sm text-[#ffbd4a] font-semibold mb-8 underline underline-offset-8">
                Address
              </h4>
              <p className="text-xl font-medium cursor-pointer">
                {ADDRESS.split(", ").map((line, idx, arr) =>
                  idx < arr.length - 1 ? (
                    <React.Fragment key={idx}>
                      {line}, <br />
                    </React.Fragment>
                  ) : (
                    <React.Fragment key={idx}>{line}</React.Fragment>
                  )
                )}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 cursor-pointer">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex justify-between items-center border-b border-gray-700 pb-3 hover:text-[#ffbd4a] transition"
                  aria-label={label}
                >
                  {label} <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
          <Form />
        </div>
      </div>

      <div className="relative bg-[#171818]">
        <div className="absolute left-1/2 -top-7 transform -translate-x-1/2 z-10">
          <button
            onClick={scrollToTop}
            className="bg-[#ffbd4a] text-black w-12 h-14 flex items-center justify-center rounded-md hover:bg-white transition duration-500 cursor-pointer shadow-lg"
            aria-label="Scroll to top"
            type="button"
            style={{
              boxShadow: "0 4px 16px 0 rgba(0,0,0,0.10)",
            }}
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
        <div className="extra_container max-w-6xl mx-auto flex flex-col items-center py-12 px-6 text-white text-[18px]">
          <p className="mb-2">© 2025 - All Rights Reserved Nicolas</p>
          <p>
            <Link href="#" className="hover:text-[#ffbd4a] cursor-pointer">
              Terms &amp; Condition
            </Link>
            {" / "}
            <Link href="#" className="hover:text-[#ffbd4a] cursor-pointer">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);