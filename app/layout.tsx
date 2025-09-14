import { ErrorBoundary } from "@/components/error-boundary";
import { Footer } from "@/components/layout/footer";
import { NavigationHeader } from "@/components/layout/navigation-header";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
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
        <ErrorBoundary 
          showErrorDetails={process.env.NODE_ENV === 'development'}
        >
          <NavigationHeader />
          {children}
          <Footer />
          <ScrollToTop />
        </ErrorBoundary>
      </body>
    </html>
  );
}
