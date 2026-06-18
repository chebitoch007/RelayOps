"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

/** Returns all focusable elements within a container */
function getTabbable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.closest('[aria-hidden="true"]'));
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const wasMobileOpenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // Return focus to hamburger button after the user closes the menu
  useEffect(() => {
    if (wasMobileOpenRef.current && !mobileOpen) {
      menuButtonRef.current?.focus();
    }
    wasMobileOpenRef.current = mobileOpen;
  }, [mobileOpen]);

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  // Focus trap + Escape key handler
  const handleDrawerKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }

      if (e.key !== "Tab") return;

      const drawer = drawerRef.current;
      if (!drawer) return;

      const tabbable = getTabbable(drawer);
      if (tabbable.length === 0) return;

      const first = tabbable[0];
      const last = tabbable[tabbable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [closeMenu]
  );

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "glass backdrop-blur-md bg-[#03080F]/70 border-b border-white/[0.06] py-3.5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Logo */}
          
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group z-50 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] p-1"
            >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9">
              <Image
                src="/logo-icon.png"
                alt="RelayOps System Identification Mark"
                fill
                priority
                sizes="(max-width: 768px) 32px, 36px"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center select-none font-space text-base sm:text-lg">
              <span className="font-bold tracking-tight text-white">Relay</span>
              <span className="font-bold tracking-tight text-[#F5A623]">Ops</span>
            </div>
          </Link>

          {/* Desktop nav - CSS-only underline hover, no Framer Motion */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#F5A623] hover:after:w-full after:transition-all after:duration-300 pb-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            
              <Link
                href="/#contact"
                className="btn-primary px-5 py-2.5 rounded-lg text-sm font-medium transition-all transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Schedule Consultation
              </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            ref={menuButtonRef}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-[#94A3B8] hover:text-white transition-colors z-50 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-haspopup="dialog"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onKeyDown={handleDrawerKeyDown}
            className="fixed inset-0 z-40 bg-[#03080F]/95 backdrop-blur-xl md:hidden flex flex-col justify-between pt-28 pb-10 px-6"
          >
            <motion.nav
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col gap-5 w-full"
              aria-label="Mobile navigation"
            >
              <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-widest border-b border-white/5 pb-2 mb-2">
                System Interface Directory
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-lg font-medium text-[#94A3B8] hover:text-white transition-colors py-2 flex items-center justify-between group border-b border-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] px-1 rounded"
                >
                  <span>{link.label}</span>
                  <span className="text-[#F5A623] opacity-0 group-hover:opacity-100 transition-opacity text-sm font-mono">
                    &rarr;
                  </span>
                </Link>
              ))}
            </motion.nav>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="w-full flex flex-col gap-4"
            >
              
                <Link
                  href="/#contact"
                  onClick={closeMenu}
                  className="btn-primary rounded-xl py-3.5 text-center text-sm font-medium shadow-lg shadow-[#F5A623]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Schedule Consultation
                </Link>
              <p className="text-center text-xs text-[#94A3B8]/40 font-mono">
                {"// System validation nodes live worldwide"}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
