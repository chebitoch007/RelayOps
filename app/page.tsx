"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import DemoSection from "@/components/sections/DemoSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const LoadingScreen = dynamic(() => import("@/components/ui/LoadingScreen"), { ssr: false });
const AnimatedCursor = dynamic(() => import("@/components/ui/AnimatedCursor"), { ssr: false });
const ParticleBackground = dynamic(() => import("@/components/ui/ParticleBackground"), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <AnimatedCursor />
      <ParticleBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TrustSection />
          <ServicesSection />
          <ProcessSection />
          <DemoSection />
          <AboutSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
