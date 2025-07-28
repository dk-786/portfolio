import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FiX } from "react-icons/fi";

interface MobiledrawerProps {
  onSignIn: () => void;
  onRegister: () => void;
}

const Mobiledrawer = ({ onSignIn, onRegister }: MobiledrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const navigationItems = {
    home: {
      label: "Home",
      items: ["Home 1", "Home 2", "Home 3"]
    },
    shop: {
      label: "Shop",
      items: ["Shop 1", "Shop 2", "Shop 3"]
    },
    pages: {
      label: "Pages",
      items: ["Page 1", "Page 2", "Page 3"]
    },
    collections: {
      label: "Collections",
      items: ["Collection 1", "Collection 2", "Collection 3"]
    },
    blog: {
      label: "Blog",
      items: ["Blog 1", "Blog 2", "Blog 3"]
    },
    contact: {
      label: "Contact",
      items: ["Contact 1", "Contact 2", "Contact 3"]
    }
  };

  return (
    <div>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleDrawer}
        className="flex flex-col items-center justify-center w-8 h-8 space-y-1"
      >
        <span className="block w-6 h-0.5 bg-gray-800"></span>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
      </button>

      {/* Mobile Drawer */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size={300}
        className="z-50"
      >
        <div className="h-full bg-white flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button
              onClick={toggleDrawer}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 p-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Navigation
              </h3>
              <ul className="space-y-2">
                {Object.entries(navigationItems).map(([key, item]) => (
                  <li key={key}>
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleDropdown(key)}
                        className="flex items-center justify-between w-full py-2 text-gray-800 hover:text-[#ba933e] transition-colors"
                      >
                        <span>{item.label}</span>
                        <IoIosArrowDown 
                          className={`transition-transform ${openDropdown === key ? 'rotate-180' : ''}`}
                          size={16}
                        />
                      </button>
                      {openDropdown === key && (
                        <div className="pl-4 space-y-1">
                          {item.items.map((subItem, index) => (
                            <Link
                              key={index}
                              href={`/${key}/${index + 1}`}
                              className="block py-1 text-sm text-gray-600 hover:text-[#ba933e] transition-colors"
                              onClick={toggleDrawer}
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Account Section */}
            <div className="space-y-2 pt-4 border-t">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Account
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    onSignIn();
                    toggleDrawer();
                  }}
                  className="flex items-center gap-2 py-2 text-gray-800 hover:text-[#ba933e] transition-colors w-full text-left"
                >
                  <CiUser size={20} />
                  Sign In
                </button>
                <button
                  onClick={() => {
                    onRegister();
                    toggleDrawer();
                  }}
                  className="flex items-center gap-2 py-2 text-gray-800 hover:text-[#ba933e] transition-colors w-full text-left"
                >
                  <CiUser size={20} />
                  Register
                </button>
              </div>
            </div>
          </div>

         
        </div>
      </Drawer>
    </div>
  );
};

export default Mobiledrawer;
