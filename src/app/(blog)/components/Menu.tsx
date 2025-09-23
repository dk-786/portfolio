import Container from "@/components/common/Container";
import Image from "next/image";
import React from "react";

const Menu = () => {
  const menuItems = [
    { name: "All", href: "#" },
    { name: "Business", href: "#" },
    { name: "Creative", href: "#" },
    { name: "Design", href: "#" },
    { name: "Lifestyle", href: "#" },
    { name: "Development", href: "#" },
  ];

  return (
    <Container>
      <nav className="text-white p-4 mt-30">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          {/* Menu Items */}
          <div className="flex flex-wrap gap-4 lg:gap-6 text-base lg:text-xl font-semibold justify-start lg:justify-start">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-[#ffbd4a] cursor-pointer transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-xs lg:max-w-none lg:w-80 mt-2 lg:mt-0">
            <input
              type="text"
              placeholder="Search in blog"
              className="bg-transparent text-white placeholder-neutral-400 py-2 pr-10 border-b border-white focus:outline-none focus:border-[#ffbd4a] w-full"
            />
            <Image
              src="/search.svg"
              alt="search"
              height={28}
              width={28}
              className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Menu;
