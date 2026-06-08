"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background body scrolling when mobile menu layout is active
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "glass backdrop-blur-md bg-[#03080F]/70 border-b border-white/[0.06] py-3.5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group z-50">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9">
              <Image
                src="/logo-icon.png"
                alt="RelayOps Logo"
                fill
                priority
                sizes="(max-width: 768px) 32px, 36px"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center select-none">
              <span
                className="font-bold tracking-tight text-white text-base sm:text-lg"
                style={{ fontFamily: "Space Grotesk" }}
              >
                Relay
              </span>
              <span
                className="font-bold tracking-tight text-base sm:text-lg"
                style={{
                  fontFamily: "Space Grotesk",
                  color: "#F5A623",
                }}
              >
                Ops
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link Cluster */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#F5A623] hover:after:w-full after:transition-all after:duration-300 pb-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Target */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="btn-primary px-5 py-2.5 rounded-lg text-sm font-medium transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Schedule Consultation
            </a>
          </div>

          {/* Mobile Interaction Toggle Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#94A3B8] hover:text-white focus:outline-none transition-colors z-50"
            aria-label={mobileOpen ? "Close main navigation menu" : "Open main navigation menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Screen Mobile Drawer Layout */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#03080F]/95 backdrop-blur-xl md:hidden flex flex-col justify-between pt-28 pb-10 px-6"
          >
            <motion.nav 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col gap-5 w-full"
            >
              <div className="text-[11px] font-mono text-[#7B8FAB] uppercase tracking-widest border-b border-white/5 pb-2 mb-2">
                Navigation Menu
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-[#94A3B8] hover:text-white transition-colors py-2 flex items-center justify-between group border-b border-white/[0.02]"
                >
                  <span>{link.label}</span>
                  <span className="text-[#F5A623] opacity-0 group-hover:opacity-100 transition-opacity text-sm font-mono">→</span>
                </a>
              ))}
            </motion.nav>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="w-full flex flex-col gap-4"
            >
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary rounded-xl py-3.5 text-center text-sm font-medium shadow-lg shadow-[#F5A623]/10"
              >
                Schedule Consultation
              </a>
              <p className="text-center text-xs text-[#7B8FAB]/50 font-mono">
                Available for execution worldwide
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}