"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavigationItems } from "./navigation-items";

export function NavigationHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-gray-800 shadow-lg relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="flex-1" />
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavigationItems />
            </div>

            {/* Burger menu button */}
            <div className="ml-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-gray-700"
                aria-label="Open menu"
              >
                <Image
                  src="/images/icon_menu.png"
                  alt="Menu"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
