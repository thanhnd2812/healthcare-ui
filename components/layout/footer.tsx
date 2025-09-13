"use client";
import { useFooterLinks } from "@/hooks";
import Link from "next/link";

export function Footer() {
  const { footerLinks, loading, error } = useFooterLinks();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center py-4">
            <div className="animate-pulse">Loading...</div>
          </div>
        ) : error ? (
          <div className="text-center py-4">
            <div className="text-red-300">Error loading footer links</div>
          </div>
        ) : (
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-orange-300 transition-colors text-sm font-light"
            >
              {link.label}
            </Link>
            ))}
          </nav>
        )}
      </div>
    </footer>
  );
}
