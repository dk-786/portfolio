"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/utils/constant/constant";

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="h-12 w-12 cursor-pointer lg:hidden" />
      </SheetTrigger>
      <SheetContent
        className="header-noise mt-[100px]  z-40 shadow-none px-14 [&>button]:hidden border-none"
      >
        <nav className="flex flex-col gap-6 py-16">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={`text-2xl p-6 font-bold transition-colors  text-white`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
