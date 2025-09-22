"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { navItems } from "@/utils/constant/constant";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="h-10 w-10 sm:h-12 sm:w-12 cursor-pointer lg:hidden" />
      </SheetTrigger>
      <SheetContent className="header-noise mt-[100px]  z-40 shadow-none px-6 [&>button]:hidden border-none">
        <nav className="flex flex-col gap-5 py-16">
          {navItems.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="text-2xl px-6 font-bold transition-colors  text-white"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
