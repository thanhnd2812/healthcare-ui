"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 
        w-12 h-12 rounded-full 
        bg-white border border-gray-300 
        hover:bg-gray-50 
        shadow-lg hover:shadow-xl 
        transition-all duration-300 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
      `}
      variant="ghost"
      size="icon"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5 text-gray-600" />
    </Button>
  );
}
