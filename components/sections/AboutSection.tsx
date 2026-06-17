"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, ShieldCheck, Cpu } from "lucide-react";
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
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-4">
              <SkeletonCard hasIcon lines={5} />
              <SkeletonCard hasIcon lines={3} />
              <SkeletonCard hasIcon lines={3} />
            </div>
            <SkeletonCard hasIcon={false} lines={10} hasTags />
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* About / How we work */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mono text-xs text-[#F5A623] uppercase tracking-widest block mb-3"
              >
                [ HOW WE WORK ]
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
                    >
                      {principle.icon}
                    </div>
                    <div>
                      <div
                        className="text-sm font-semibold tracking-wide text-white mb-1 font-space"
                      >
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

              <div className="mt-5 glass-accent rounded-xl p-6">
                <div className="text-xs mono text-[#64748B] uppercase tracking-widest mb-2 block">
                  [ OUR APPROACH ]
                </div>
                <div className="text-sm text-[#94A3B8] leading-relaxed font-light">
                  &quot;Manual handoffs are where things break. Our job is to build
                  automations that are reliable, easy to understand, and still make
                  sense to your team months after we&apos;ve shipped them.&quot;
                </div>
                <div className="text-xs text-[#64748B] mt-4 font-light">
                  — Brian, founder of RelayOps, based in Nairobi, Kenya
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}