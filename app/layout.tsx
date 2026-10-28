/*
 * File: app/layout.tsx
 * Author: [Rahul Thakur]
 * Date: October 27, 2026
 */

import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Page metadata
export const metadata: Metadata = {
  title: "New Generation High School | Student Portal",
  description: "Student portal for New Generation High School",
};

// Props interface
interface RootLayoutProps {
  children: ReactNode;
}

// Main layout component
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800">
        {/* Navigation bar */}
        <Navbar />

        {/* Main page content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
