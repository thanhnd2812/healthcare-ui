import { Footer } from "@/components/footer";
import { NavigationHeader } from "@/components/navigation-header";
import { ScrollToTop } from "@/components/scroll-to-top";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hiragino = localFont({
  src: "../public/fonts/Hiragino-Kaku-Gothic-Pro.otf",
  variable: "--font-hiragino",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Health Care - Nguyen Duc Thanh Frontend Test",
  description: "Nguyen Duc Thanh Frontend Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hiragino.variable} antialiased`}
      >
        <NavigationHeader />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
