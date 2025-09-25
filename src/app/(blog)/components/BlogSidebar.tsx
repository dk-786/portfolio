"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaChevronRight } from 'react-icons/fa';

export default function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Creative',
    'Business', 
    'Design',
    'Marketing',
    'Lifestyle'
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'The main thing for the designer',
      date: '26 January, 2024',
      image: '/user/10.jpg'
    },
    {
      id: 2,
      title: 'The services provide for design',
      date: '26 January, 2024',
      image: '/user/10.jpg'
    },
    {
      id: 3,
      title: 'The main thing for the designer',
      date: '26 January, 2024',
      image: '/user/10.jpg'
    }
  ];

  const tags = [
    'BUSINESS',
    'DIGITAL',
    'AUDIO POST',
    'GALLERY POST',
    'MARKETING',
    'AGENCY',
    'GRAPHIC'
  ];

  return (
    <aside className="space-y-12">
      {/* Search Section */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-6 border-b border-[#2f3030] pb-3">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#111212] border border-[#2f3030] text-white placeholder-gray-400 px-6 py-4 pr-12 rounded-md focus:outline-none  transition-colors"
          />
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#ffbd4a] text-black p-5 rounded-md hover:bg-white transition-colors cursor-pointer">
            <FaSearch className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-6  border-b border-[#2f3030] pb-3">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center justify-between group cursor-pointer">
              <span className="text-[#959595] group-hover:text-[#ffbd4a] transition-colors">
                {category}
              </span>
              <FaChevronRight className="w-3 h-3 text-gray-500 group-hover:text-[#ffbd4a] transition-colors" />
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Section */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-6  border-b border-[#2f3030] pb-3">Recent Post</h3>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex gap-4 group cursor-pointer">
              <div className="flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-md"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-400 text-sm mb-1">{post.date}</p>
                <h4 className="text-white font-medium text-sm leading-tight group-hover:text-[#ffbd4a] transition-colors">
                  {post.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags Section */}
      <div>
        <h3 className="text-white text-xl font-bold mb-6">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-2 border border-[#2f3030] text-[#959595] text-sm rounded-md hover:bg-[#ffbd4a] hover:text-black transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
