"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, ShieldCheck, Cpu } from "lucide-react";
import SkeletonCard from "@/components/SkeletonCard";

const stack = [
  "Distributed Orchestration Engine",
  "Deterministic GPT-4 Validation",
  "High-Throughput n8n Matrices",
  "Asynchronous Event Brokers",
  "Supabase Relational Layers",
  "Secure WhatsApp Transport Layers",
  "Twilio Core SIP Infrastructure",
  "Isolated Call Telemetry Profiles",
  "ClickHouse Analytical Logging",
];

const designPrinciples = [
  {
    icon: <Terminal size={15} />,
    title: "Deterministic State Machine Topologies",
    desc: "We do not deploy black-box chatbots or volatile prompt chains. Every workflow behaves as an immutable state machine with deterministic handling loops.",
    color: "#F5A623",
  },
  {
    icon: <ShieldCheck size={15} />,
    title: "Idempotent Data Transmutation Layers",
    desc: "Built to run natively across multi-region infrastructure. System failure loops automatically fall back on secure checkpoints to eliminate transactional mutation vectors.",
    color: "#0EA5E9",
  },
  {
    icon: <Cpu size={15} />,
    title: "Rigorous 5-Layer Validator System",
    desc: "All ingested payloads flow through a validation grid consisting of structural checks, data integrity bounds, and runtime threat isolation rules before state progression.",
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
            {/* System Mechanics Info */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mono text-xs text-[#F5A623] uppercase tracking-widest block mb-3"
              >
                [ SYSTEM METRICS & DESIGN SPECIFICATIONS ]
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-3xl lg:text-5xl font-bold tracking-tight mb-6"
              >
                Production-grade systems engineering for{" "}
                <span className="gradient-text">mission-critical workflows.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-[#64748B] leading-relaxed mb-8 font-normal text-base"
              >
                RelayOps functions strictly as an architectural consulting engineering studio. We
                identify manual operational bottlenecks, map them into discrete mathematical
                workflows, and replace them with fault-tolerant systems.
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

            {/* Infrastructure Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="glass rounded-xl border border-white/[0.05] p-8">
                <div className="text-xs mono text-[#64748B] uppercase tracking-widest mb-6 block">
                  // SYSTEM CORE REPERTOIRE MAPPING
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
                        Pipeline Bandwidth Status
                      </div>
                      <div className="text-xs text-[#64748B]">
                        Ingesting a maximum of 2 systemic build integrations per quarter for
                        complete isolation testing.
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                      <div className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
                      <span className="text-xs mono text-[#F5A623] uppercase tracking-wider font-medium">
                        READY //
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 glass-accent rounded-xl p-6">
                <div className="text-xs mono text-[#64748B] uppercase tracking-widest mb-2 block">
                  [ STRUCTURAL GOVERNANCE MANIFESTO ]
                </div>
                <div className="text-sm text-[#94A3B8] leading-relaxed font-light">
                  "We operate under the assumption that manual data handoffs are unmitigated points
                  of failure. Our core mandate is to deliver resilient, closed-loop orchestrations
                  where uptime, security validation, and transparency metrics are hard-coded
                  directly into the system architecture."
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}