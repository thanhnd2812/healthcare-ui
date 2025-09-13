"use client";

import { useMobileMenu } from "@/hooks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { menuItems, loading, error } = useMobileMenu();
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-gray-700"
          >
            <Image
              src="/images/icon_close.png"
              alt="Close"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="px-6 py-4">
          {loading ? (
            <div className="text-white text-center py-8">
              <div className="animate-pulse">Loading menu...</div>
            </div>
          ) : error ? (
            <div className="text-red-300 text-center py-8">
              <div>Error loading menu</div>
            </div>
          ) : (
            <div className="space-y-4">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block transition-colors py-4 border-b border-gray-600 last:border-b-0",
                      isActive 
                        ? "text-orange-400 font-medium" 
                        : "text-white hover:text-orange-300"
                    )}
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
