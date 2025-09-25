"use client";
import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function BlogContent() {
  return (
    <article className="text-white">
      {/* Introduction paragraphs */}
      <div className="space-y-6 mb-8">
        <p className="text-[#959595] text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-[#959595] text-lg leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Blockquote */}
      <blockquote className="relative my-12 p-8 border-l-4 border-[#ffbd4a] bg-[#1a1a1a] rounded-r-lg">
        <div className="flex items-start gap-4">
          <FaQuoteLeft className="text-[#ffbd4a] text-4xl flex-shrink-0 mt-2" />
          <div>
            <p className="text-gray-200 text-xl font-medium leading-relaxed italic">
               <q>On the other hand, we denounce with righteous indignation and dislike men demoralized by the charms of pleasure of the moments, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.</q>
            </p>
            <div className="mt-6 pt-4 border-t border-gray-700">
              <cite className="text-[#ffbd4a] font-semibold text-lg">Polina Viola</cite>
            </div>
          </div>
        </div>
      </blockquote>

      {/* Continuing paragraph */}
      <p className="text-[#959595] text-lg leading-relaxed mb-12">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>

      {/* Section Heading 1 */}
      <h2 className="text-4xl font-bold text-white mb-6">
        Integrating Design, Branding and Marketing
      </h2>
      <p className="text-[#959595] text-lg leading-relaxed mb-12">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
      </p>

      {/* Main Image */}
      <div className="mb-12">
        <Image 
          src="/user/10.jpg" 
          alt="Team meeting discussion" 
          width={800} 
          height={500}
          className="w-full h-auto rounded-4xl shadow-2xl"
        />
      </div>

      {/* Section Heading 2 */}
      <h2 className="text-4xl font-bold text-white mb-6">
        Weaving Visual Narratives
      </h2>
      <p className="text-[#959595] text-lg leading-relaxed mb-12">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
      </p>

      {/* Post Metadata */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 py-8 border-y border-[#2f3030]">
        <div className="flex items-center gap-4">
          <span className="text-white text-lg">Posted in:</span>
          <div className="flex gap-3">
            <span className="px-4 py-2 border border-[#2f3030] text-[#959595] rounded-md text-sm font-medium hover:bg-[#ffbd4a] hover:text-black transition-colors cursor-pointer">
              BUSINESS
            </span>
            <span className="px-4 py-2 border border-[#2f3030] text-[#959595] rounded-md text-sm font-medium hover:bg-[#ffbd4a] hover:text-black transition-colors cursor-pointer">
              DIGITAL
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-white text-lg">Share:</span>
          <div className="flex gap-3">
            <button className="p-2 border border-[#2f3030] text-[#959595] rounded-md hover:bg-[#ffbd4a] hover:text-black transition-colors">
              <FaFacebookF className="w-4 h-4" />
            </button>
            <button className="p-2 border border-[#2f3030] text-[#959595] rounded-md hover:bg-[#ffbd4a] hover:text-black transition-colors">
              <FaTwitter className="w-4 h-4" />
            </button>
            <button className="p-2 border border-[#2f3030] text-[#959595] rounded-md hover:bg-[#ffbd4a] hover:text-black transition-colors">
              <FaInstagram className="w-4 h-4" />
            </button>
            <button className="p-2 border border-[#2f3030] text-[#959595] rounded-md hover:bg-[#ffbd4a] hover:text-black transition-colors">
              <FaLinkedinIn className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
