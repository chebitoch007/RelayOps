"use client";

import { ExternalLink, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: <Mail size={15} />, href: "mailto:hello@relayops.ai", label: "Email" },
  { icon: <ExternalLink size={15} />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <ExternalLink size={15} />, href: "https://github.com", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/6" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" aria-label="Go to home" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #00E5A0, #0A84FF)" }}>
                <span className="text-sm font-bold text-[#03080F]" style={{ fontFamily: "Syne" }}>A</span>
              </div>
              <span className="font-bold" style={{ fontFamily: "Syne" }}>
                Relay<span className="gradient-text">Ops</span>
              </span>
            </a>
            <p className="text-sm text-[#7B8FAB] leading-relaxed max-w-xs font-light">
              A lean AI automation studio helping businesses save time, generate leads,
              and scale operations using modern AI workflows.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/8 text-[#7B8FAB] hover:text-[#00E5A0] hover:border-[#00E5A0]/30 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs mono text-[#7B8FAB] uppercase tracking-widest mb-4">Navigation</div>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#7B8FAB] hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs mono text-[#7B8FAB] uppercase tracking-widest mb-4">Contact</div>
            <div className="space-y-3">
              <a
                href="mailto:hello@relayops.ai"
                className="text-sm text-[#7B8FAB] hover:text-white transition-colors block"
              >
                hello@relayops.ai
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#7B8FAB] hover:text-white transition-colors block"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#7B8FAB] hover:text-white transition-colors block"
              >
                GitHub
              </a>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] pulse-glow" />
                <span className="text-xs text-[#00E5A0]">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#7B8FAB] font-light">
            © {new Date().getFullYear()} RelayOps. All rights reserved.
          </span>
          <span className="text-xs mono text-[#7B8FAB]/50">
            Built with Next.js · Deployed on Vercel
          </span>
        </div>
      </div>
    </footer>
  );
}
