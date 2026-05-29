"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Layers } from "lucide-react";

const stack = [
  "OpenAI GPT-4", "Claude API", "n8n", "Make.com", "WhatsApp API",
  "Twilio", "Cal.com", "Airtable", "Zapier", "Supabase",
];

const values = [
  {
    icon: <Code2 size={16} />,
    title: "Technical depth",
    desc: "We don't use off-the-shelf bots. Every system is custom-engineered for your specific use case.",
    color: "#00E5A0",
  },
  {
    icon: <Globe size={16} />,
    title: "Async-first",
    desc: "We work with international clients across time zones. Communication is clear, documented, and efficient.",
    color: "#0A84FF",
  },
  {
    icon: <Layers size={16} />,
    title: "Lean by design",
    desc: "Small team means faster decisions, direct communication, and senior engineers on every project.",
    color: "#7B61FF",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="mono text-xs text-[#00E5A0] tracking-widest uppercase"
            >
              About RelayOps
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6"
            >
              A lean technical{" "}
              <span className="gradient-text">automation studio</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[#7B8FAB] leading-relaxed mb-8 font-light text-lg"
            >
              We are a focused technical team building practical AI systems for modern businesses.
              No fluff, no buzzwords — just working automation that saves time and generates revenue.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-[#7B8FAB] leading-relaxed mb-10 font-light"
            >
              We partner with agencies, SaaS companies, and service businesses to identify their highest-value
              workflow bottlenecks and eliminate them with AI. Our clients typically see results within 2–4 weeks.
            </motion.p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/2"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${v.color}15`, color: v.color }}>
                    {v.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-1" style={{ fontFamily: "Syne" }}>{v.title}</div>
                    <div className="text-xs text-[#7B8FAB] leading-relaxed">{v.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="glass rounded-2xl border border-white/8 p-8">
              <div className="text-xs mono text-[#7B8FAB] uppercase tracking-widest mb-6">
                Tech Stack & Tools
              </div>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {stack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.04 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#EDF2FF",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Availability status */}
              <div className="border-t border-white/6 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold mb-1" style={{ fontFamily: "Syne" }}>
                      Available for new projects
                    </div>
                    <div className="text-xs text-[#7B8FAB]">
                      Currently accepting 2 clients per month
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00E5A0] pulse-glow" />
                    <span className="text-xs text-[#00E5A0] font-medium">Open</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-5 glass-accent rounded-2xl p-6">
              <div className="text-sm text-[#7B8FAB] leading-relaxed italic font-light mb-4">
                "We believe AI automation should be practical, measurable, and owned by the businesses that use it —
                not a black box rented from an agency."
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00E5A0] to-[#0A84FF] flex items-center justify-center text-xs font-bold text-[#03080F]">
                  A
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ fontFamily: "Syne" }}>RelayOps Team</div>
                  <div className="text-xs text-[#7B8FAB]">Automation Studio</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
