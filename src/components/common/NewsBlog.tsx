"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Container from "./Container";
import { blogPosts } from "@/utils/constant/constant";
import { useRouter } from "next/navigation";

const NewsBlog = () => {
  const router = useRouter();

  return (
    <Container>
      <section className="text-white w-full px-0 py-8 lg:px-20 lg:py-16">
        <div className="border-y border-[#2f3030] divide-y divide-[#2f3030]">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col lg:grid lg:grid-cols-2 items-center py-8 sm:py-10 lg:py-12 gap-6"
            >
              <div className="space-y-4 sm:space-y-6 p-0 sm:p-4 lg:p-6 w-full">
                <div className="flex items-center text-base sm:text-lg text-white space-x-2">
                  <span className="text-yellow-400">●</span>
                  <span>{post.date}</span>
                </div>

                <div
                  className="text-xl sm:text-2xl lg:text-4xl font-semibold hover:text-[#ffbd4a] cursor-pointer transition-colors"
                  onClick={() => router.push("/blogdetails")}
                >
                  {post.title}
                </div>

                <Link
                  href={post.link}
                  className="text-base sm:text-lg text-gray-300 hover:text-[#ffbd4a] flex items-center gap-2 cursor-pointer transition-colors"
                >
                  Read the story
                  <GoArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
                </Link>
              </div>

              <div className="relative w-full h-48 sm:h-64 lg:h-64 rounded-lg overflow-hidden cursor-pointer group mt-4 lg:mt-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default NewsBlog;
