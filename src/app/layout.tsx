import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressProvider from "@/contexts/ProgressProvider";

const font = Inter();

export const metadata: Metadata = {
  title: "CirroBox",
  description:
    "Share free tools and projects — from CLI utilities to apps and servers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${font.className} antialiased`}>
        <Providers>
          <ProgressProvider>
            <Header />

            <div className="container px-4 mx-auto min-h-screen space-y-12">
              {children}
            </div>

            <Footer />
          </ProgressProvider>
        </Providers>
      </body>
    </html>
  );
}
