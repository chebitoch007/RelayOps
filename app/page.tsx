"use client";

import { useEffect, useState, memo } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

// Performance Optimization: Memoize sections to prevent unnecessary tree re-renders
const TrustSection = memo(dynamic(() => import("@/components/sections/TrustSection")));
const ServicesSection = memo(dynamic(() => import("@/components/sections/ServicesSection")));
const ProcessSection = memo(dynamic(() => import("@/components/sections/ProcessSection")));
const DemoSection = memo(dynamic(() => import("@/components/sections/DemoSection")));
const AboutSection = memo(dynamic(() => import("@/components/sections/AboutSection")));
const CTASection = memo(dynamic(() => import("@/components/sections/CTASection")));
const Footer = memo(dynamic(() => import("@/components/sections/Footer")));

// Interaction-deferred structural decorations
const LoadingScreen = dynamic(() => import("@/components/ui/LoadingScreen"), { ssr: false });
const AnimatedCursor = dynamic(() => import("@/components/ui/AnimatedCursor"), { ssr: false });
const ParticleBackground = dynamic(() => import("@/components/ui/ParticleBackground"), { ssr: false });

export default function Home() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [mountDecorations, setMountDecorations] = useState(false);

  useEffect(() => {
    // Incognito Safe Storage Validation Checklist Loop
    try {
      const hasVisited = sessionStorage.getItem("hasVisited");
      if (!hasVisited) {
        setIsFirstVisit(true);
        sessionStorage.setItem("hasVisited", "true");
      }
    } catch (error) {
      console.warn("Storage check blocked by browser security rules. Defaulting to bypass intro animation:", error);
      setIsFirstVisit(false); 
    }

    // Performance Deferred Strategy: Initialize canvas operations only on interaction hooks
    const bootDecorations = () => setMountDecorations(true);
    
    window.addEventListener("mousemove", bootDecorations, { once: true, passive: true });
    window.addEventListener("touchstart", bootDecorations, { once: true, passive: true });
    window.addEventListener("scroll", bootDecorations, { once: true, passive: true });

    const fallbackTimeoutId = setTimeout(bootDecorations, 2000);

    return () => {
      window.removeEventListener("mousemove", bootDecorations);
      window.removeEventListener("touchstart", bootDecorations);
      window.removeEventListener("scroll", bootDecorations);
      clearTimeout(fallbackTimeoutId);
    };
  }, []);

  return (
    <>
      {/* Accessibility Link Target: Keyboard Navigation Skip Node */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] bg-[#0EA5E9] text-white px-4 py-2 font-bold rounded shadow-xl tracking-wide font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
      >
        Skip to main content
      </a>

      {isFirstVisit && <LoadingScreen />}
      
      {mountDecorations && (
        <>
          <AnimatedCursor />
          <ParticleBackground />
        </>
      )}

      <div className="relative z-10">
        <Navbar />
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
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