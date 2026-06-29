"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, ShieldCheck, Cpu, ExternalLink, Mail, MapPin } from "lucide-react";
import SkeletonCard from "@/components/SkeletonCard";

const stack = [
  "n8n & Make.com",
  "OpenAI GPT-4 & Claude",
  "Supabase",
  "WhatsApp Business API",
  "Twilio",
  "Zapier",
  "Next.js & TypeScript",
  "PostgreSQL",
  "REST APIs & Webhooks",
];

const designPrinciples = [
  {
    icon: <Terminal size={15} />,
    title: "No black-box AI guesswork",
    desc: "Every automation follows clear, predictable logic. You'll always know exactly what it does and why — no mystery prompts, no surprises.",
    color: "#F5A623",
  },
  {
    icon: <ShieldCheck size={15} />,
    title: "Built to handle errors gracefully",
    desc: "If something goes wrong — an API hiccup, a duplicate form submission — the system recovers safely instead of breaking or duplicating your data.",
    color: "#0EA5E9",
  },
  {
    icon: <Cpu size={15} />,
    title: "Tested before it touches your business",
    desc: "Every workflow is checked against real-world edge cases and failure points before it goes live, so it works reliably from day one.",
    color: "#6366F1",
  },
];

const founderLinks = [
  {
    icon: <ExternalLink size={14} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/relayops",
  },
  {
    icon: <ExternalLink size={14} />,
    label: "GitHub",
    href: "https://github.com/chebitoch007",
  },
  {
    icon: <Mail size={14} />,
    label: "brian@relayops.site",
    href: "mailto:brian@relayops.site",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {!inView ? (
          <div className="space-y-16">
            <SkeletonCard hasIcon lines={4} />
            <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-4">
                <SkeletonCard hasIcon lines={5} />
                <SkeletonCard hasIcon lines={3} />
                <SkeletonCard hasIcon lines={3} />
              </div>
              <SkeletonCard hasIcon={false} lines={10} hasTags />
            </div>
          </div>
        ) : (
          <div className="space-y-20">

            {/* ── Founder section ── */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mono text-xs text-[#F5A623] uppercase tracking-widest block mb-3"
              >
                [ THE FOUNDER ]
              </motion.span>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left: identity card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Avatar + name row */}
                  <div className="flex items-center gap-5 mb-7">
                    {/* Photo placeholder — drop a real headshot at /public/brian.jpg to activate */}
                    <div
                      className="w-20 h-20 rounded-2xl border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden"
                      style={{ background: "rgba(245,166,35,0.06)" }}
                      aria-hidden="true"
                    >
                      {/* When a real photo is available, replace this div contents with:
                          <Image src="/brian.jpg" alt="Brian Chebitoch" width={80} height={80} className="object-cover w-full h-full" /> */}
                      <span
                        className="text-2xl font-bold mono"
                        style={{ color: "#F5A623" }}
                      >
                        BC
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        Brian Chebitoch
                      </h3>
                      <p className="text-sm text-[#7B8FAB] mt-0.5">
                        Founder &amp; Automation Engineer
                      </p>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <MapPin size={11} className="text-[#64748B]" aria-hidden="true" />
                        <span className="text-xs text-[#64748B]">Nairobi, Kenya</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="space-y-4 mb-7">
                    <p className="text-[#94A3B8] leading-relaxed text-sm font-light">
                      I started RelayOps because I kept seeing the same problem everywhere —
                      agencies and service businesses losing deals not because they weren&apos;t
                      good enough, but because they were too slow to follow up. A lead comes in
                      at 10pm, nobody sees it until morning, and the prospect has already booked
                      with whoever replied first.
                    </p>
                    <p className="text-[#94A3B8] leading-relaxed text-sm font-light">
                      My background is in IT and systems engineering. I don&apos;t approach this
                      as an AI enthusiast — I approach it as someone who builds things that need
                      to work reliably without someone watching over them. The automations I build
                      are designed to run quietly in the background and handle the unexpected
                      without breaking.
                    </p>
                    <p className="text-[#94A3B8] leading-relaxed text-sm font-light">
                      RelayOps is a small agency on purpose. Every client gets direct access
                      to me — not a project manager relaying messages — and I only take on
                      work I can deliver to a standard I&apos;d be comfortable showing publicly.
                    </p>
                  </div>

                  {/* Social links */}
                  <div className="flex flex-wrap gap-3">
                    {founderLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs text-[#7B8FAB] hover:text-white transition-colors duration-200 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.1]"
                      >
                        <span style={{ color: "#F5A623" }} aria-hidden="true">
                          {link.icon}
                        </span>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Right: pull quote + engineering philosophy */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="space-y-5"
                >
                  {/* Pull quote */}
                  <div className="glass-accent rounded-xl p-6">
                    <div
                      className="text-3xl font-bold leading-none mb-3"
                      style={{ color: "#F5A623", fontFamily: "var(--font-space)" }}
                      aria-hidden="true"
                    >
                      &ldquo;
                    </div>
                    <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
                      Manual handoffs are where things break. My job is to build automations
                      that are reliable, easy to understand, and still make sense to your team
                      months after I&apos;ve shipped them — not just impressive demos that fall
                      apart in production.
                    </p>
                    <p className="text-xs text-[#64748B] mt-4 font-light">
                      — Brian Chebitoch, RelayOps
                    </p>
                  </div>

                  {/* Engineering philosophy card */}
                  <div
                    className="rounded-xl p-6 border border-white/[0.05]"
                    style={{ background: "rgba(255,255,255,0.01)" }}
                  >
                    <div className="text-xs mono text-[#64748B] uppercase tracking-widest mb-4 block">
                      {"// ENGINEERING PHILOSOPHY"}
                    </div>
                    <div className="space-y-3">
                      {[
                        "Solve the operational problem first — AI is a tool, not the product.",
                        "Every build ships with documentation the client can follow without me.",
                        "If I can't explain clearly how it works, it's not ready to ship.",
                      ].map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span
                            className="text-xs mono mt-0.5 flex-shrink-0"
                            style={{ color: "#0EA5E9" }}
                            aria-hidden="true"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="text-xs text-[#7B8FAB] leading-relaxed font-light">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* ── How we work section ── */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Design principles */}
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                  className="mono text-xs text-[#F5A623] uppercase tracking-widest block mb-3"
                >
                  [ HOW WE BUILD ]
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="text-3xl lg:text-5xl font-bold tracking-tight mb-6"
                >
                  Built to be reliable,{" "}
                  <span className="gradient-text">not just clever.</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="text-[#64748B] leading-relaxed mb-8 font-normal text-base"
                >
                  RelayOps is a small, hands-on automation studio. We look at the manual,
                  repetitive parts of your business — replying to leads, booking calls,
                  chasing follow-ups — and turn them into systems that just work quietly
                  in the background, every day.
                </motion.p>

                <div className="space-y-4">
                  {designPrinciples.map((principle, i) => (
                    <motion.div
                      key={principle.title}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                      className="flex items-start gap-4 p-5 rounded-lg border border-white/[0.03] bg-white/[0.01]"
                    >
                      <div
                        className="w-8 h-8 rounded border border-white/10 flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `${principle.color}08`,
                          color: principle.color,
                        }}
                        aria-hidden="true"
                      >
                        {principle.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold tracking-wide text-white mb-1 font-space">
                          {principle.title}
                        </div>
                        <div className="text-xs text-[#64748B] leading-relaxed font-light">
                          {principle.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tools + availability */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="glass rounded-xl border border-white/[0.05] p-8">
                  <div className="text-xs mono text-[#64748B] uppercase tracking-widest mb-6 block">
                    {"// TOOLS WE WORK WITH"}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {stack.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.03 }}
                        className="px-3 py-1.5 rounded text-xs font-medium mono border"
                        style={{
                          background: "rgba(255,255,255,0.01)",
                          border: "1px solid rgba(255,255,255,0.04)",
                          color: "#E2E8F0",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="border-t border-white/[0.05] pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold tracking-wide text-white mb-1 font-space">
                          Current Availability
                        </div>
                        <div className="text-xs text-[#64748B]">
                          Taking on a limited number of new projects each month so every
                          client gets proper attention.
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                        <div className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
                        <span className="text-xs mono text-[#F5A623] uppercase tracking-wider font-medium">
                          AVAILABLE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}