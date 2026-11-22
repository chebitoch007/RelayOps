"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  // Close the menu on navigation (state adjusted during render, not in an effect)
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" aria-label="RelayOps home" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>

        <nav aria-label="Primary" className="only-desktop" style={{ gap: "1.75rem", alignItems: "center" }}>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="nav-link" aria-current={isActive(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a className="btn only-desktop" style={{ minHeight: "2.5rem", padding: "0.5rem 1.1rem" }} href={SITE.calendly} target="_blank" rel="noopener">
            Book a call
          </a>
          <button
            type="button"
            className="only-mobile"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            style={{ minHeight: "2.75rem", minWidth: "2.75rem", background: "none", border: "1px solid var(--line)", borderRadius: 999, padding: "0 1rem", font: "600 0.9375rem var(--font-body)", color: "var(--ink)", cursor: "pointer" }}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="menu-panel only-mobile-flex" hidden={!open}>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className="mlink">{n.label}</Link>
        ))}
        <a className="btn" style={{ marginTop: "1.5rem" }} href={SITE.calendly} target="_blank" rel="noopener">Book a free call</a>
        <Link className="btn btn-ghost" href="/#contact" onClick={() => setOpen(false)}>Send a message</Link>
      </div>
    </header>
  );
}
