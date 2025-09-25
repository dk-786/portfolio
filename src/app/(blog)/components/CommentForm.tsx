"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function CommentForm() {
  return (
    <section className="mt-12 text-white">
      <div className="bg-[#0f0f0f] border border-[#2f3030] rounded-xl p-6 sm:p-8 lg:p-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Leave a Reply</h2>
        <p className="text-[#959595] mb-8">
          Your email address will not be published. Required fields are marked
          <span className="text-[#ffbd4a]"> *</span>
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              aria-label="Name"
              className="w-full bg-[#111212] border border-[#2f3030] rounded-md px-5 py-4 text-white placeholder-[#7a7a7a] focus:outline-none focus:ring-0"
            />
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="w-full bg-[#111212] border border-[#2f3030] rounded-md px-5 py-4 text-white placeholder-[#7a7a7a] focus:outline-none focus:ring-0"
            />
          </div>

          <textarea
            placeholder="Write Comment"
            aria-label="Write Comment"
            rows={8}
            className="w-full bg-[#111212] border border-[#2f3030] rounded-md px-5 py-4 text-white placeholder-[#7a7a7a] focus:outline-none focus:ring-0"
          />

          <button
            type="button"
            className="inline-flex items-center gap-3 bg-[#ffbd4a] hover:bg-white text-black font-semibold px-6 sm:px-8 py-4 rounded-md transition-colors cursor-pointer"
          >
            Post Comment
            <FaArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}


