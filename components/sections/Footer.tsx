"use client";

import { ExternalLink, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  {
    icon: <Mail size={15} />,
    href: "mailto:brian@relayops.site",
    label: "Email",
  },
  {
    icon: <ExternalLink size={15} />,
    href: "https://www.linkedin.com/company/relayops",
    label: "LinkedIn",
  },
  {
    icon: <ExternalLink size={15} />,
    href: "https://github.com/chebitoch007/RelayOps",
    label: "GitHub",
  },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/[0.06] bg-[#03080F]"
      style={{ background: "var(--bg-secondary, #03080F)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        {/* Main Footer Data Grid Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Presentation Identity Column */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #F5A623, #0EA5E9)",
                }}
              >
                <span
                  className="text-xs font-bold text-[#03080F] font-space"
                >
                  R
                </span>
              </div>
              <span className="font-bold tracking-tight text-white text-lg font-space">
                RELAY<span className="gradient-text text-[#F5A623]">OPS</span>
              </span>
            </Link>
            
            <p className="text-sm text-[#7B8FAB] leading-relaxed max-w-sm font-light mb-6">
              A lean AI automation studio helping agencies and service businesses
              save time, capture more leads, and scale without hiring.
            </p>
            
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 text-[#7B8FAB] hover:text-[#0EA5E9] hover:border-[#0EA5E9]/40 bg-white/[0.01] hover:bg-[#0EA5E9]/5 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Functional Navigation Directory Column */}
          <div className="flex flex-col">
            <div className="text-xs font-mono text-[#7B8FAB] uppercase tracking-widest mb-4 border-l-2 border-[#0EA5E9] pl-2">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#7B8FAB] hover:text-white transition-colors duration-200 flex items-center gap-1 group w-max"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="text-[#7B8FAB]/40 group-hover:text-[#0EA5E9] transform opacity-0 group-hover:opacity-100 -translate-y-0.5 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Availability Metric Column */}
          <div className="flex flex-col">
            <div className="text-xs font-mono text-[#7B8FAB] uppercase tracking-widest mb-4 border-l-2 border-[#F5A623] pl-2">
              Contact
            </div>
            <div className="space-y-3">
              <a
                href="mailto:brian@relayops.site"
                className="text-sm text-[#7B8FAB] hover:text-white transition-colors duration-200 block break-all"
              >
                brian@relayops.site
              </a>
              <a
                href="https://www.linkedin.com/company/relayops"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#7B8FAB] hover:text-white transition-colors duration-200 block"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/chebitoch007/RelayOps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#7B8FAB] hover:text-white transition-colors duration-200 block"
              >
                GitHub
              </a>
              
              <div className="inline-flex items-center gap-2 mt-4 bg-white/[0.02] border border-white/[0.04] px-3 py-1.5 rounded-full w-max">
                <div className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse shadow-sm shadow-[#F5A623]" />
                <span className="text-xs text-[#F5A623] font-medium tracking-wide">
                  Available for new projects
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Platform Legalities Layout Segment */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#7B8FAB]/70 font-light text-center sm:text-left order-2 sm:order-1">
            &copy; {new Date().getFullYear()} RelayOps. All rights reserved.
          </span>
          <span className="text-xs font-mono text-[#7B8FAB]/40 text-center sm:text-right order-1 sm:order-2">
            Built with Next.js &middot; Deployed on Vercel
          </span>
        </div>
        
      </div>
    </footer>
  );
}