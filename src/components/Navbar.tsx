"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { navItems } from "@/utils/constant/constant";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useEffect, useCallback, useState } from "react";
import MobileNavbar from "./MobileDrawer";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between border-b border-[#343434] bg-[#171818] text-white shadow-md header-noise transition-all duration-300 z-50 ${
        scrolled
          ? "px-8 py-7 rounded-none scrolled lg:px-[75px] lg:py-[30px]"
          : "px-8 py-7 rounded-none lg:px-[75px] lg:py-[40px] lg:rounded-b-[40px]"
      }`}
    >
      <div className="relative z-10  flex w-full  items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 lg:border-r border-[#343434] pr-9 cursor-pointer"
          aria-label="Home"
        >
          <Image
            src="/user/logo.png"
            alt="Logo"
            width={157}
            height={60}
            priority
            unoptimized
            className="w-[124px] h-[48px] lg:w-[157px] lg:h-[60px]"
          />
        </Link>
        <NavigationMenu className="hidden lg:flex lg:flex-1">
          <NavigationMenuList className="flex gap-5">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link
                  href={item.href}
                  className={`font-medium transition-colors ${pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                    }`}
                >
                  <NavigationMenuLink asChild>
                    <span>{item.label}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="relative lg:border-l border-[#343434] h-full pl-9 flex items-center justify-end">
          <div className="lg:hidden">
            <MobileNavbar />
          </div>
          <Button className="hidden lg:flex bg-[#ffbd4a] text-black text-lg font-bold px-11 py-7 rounded-md hover:bg-white transition duration-500 items-center gap-2 cursor-pointer">
            Let&apos;s talk
            <Image
              src="/user/arrow.png"
              alt="Arrow"
              width={16}
              height={16}
              className="rotate-180"
            />
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;