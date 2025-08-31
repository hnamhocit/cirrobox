"use client";

import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@heroui/react";
import {
  Ambulance,
  ArrowBigDownDash,
  DownloadIcon,
  Github,
  Hammer,
  HardDrive,
  PencilRuler,
  Rocket,
  Share2Icon,
  ShareIcon,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />

      <div className="container mx-auto px-4 space-y-12">
        <Hero />

        <div className="space-y-4">
          <div className="text-center text-2xl font-bold">Library</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card />

            <Card />

            <Card />

            <Card />

            <Card />

            <Card />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
