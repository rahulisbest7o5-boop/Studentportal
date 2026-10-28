/*
 * File: app/layout.tsx
 * Author: [Rahul Thakur]
 * Date: October 27, 2026
 */

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "New Generation High School | Student Portal",
  description: "Student portal for New Generation High School",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
