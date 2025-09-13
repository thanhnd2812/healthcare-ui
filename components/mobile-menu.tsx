"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { href: "/record", label: "自分の記録" },
  { href: "/weight-graph", label: "体重グラフ" },
  { href: "/goals", label: "目標" },
  { href: "/selected-course", label: "選択中のコース" },
  { href: "/columns", label: "コラム一覧" },
  { href: "/settings", label: "設定" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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
          <div className="space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-white hover:text-orange-300 transition-colors py-4 border-b border-gray-600 last:border-b-0"
                onClick={onClose}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
