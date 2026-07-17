"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  FileText,
  Cpu,
  ShieldCheck,
  Rocket,
  BookOpen,
  Wrench,
  Users,
} from "lucide-react";
import SkeletonCard from "@/components/SkeletonCard";

const steps = [
  {
    number: "01",
    icon: <MessageSquare size={18} />,
    title: "Discovery",
    desc: "A single call to understand your business, your current workflow, and where time is actually being lost. No commitment required — just a direct conversation about whether automation is the right fix.",
    color: "#F5A623",
    optional: false,
  },
  {
    number: "02",
    icon: <FileText size={18} />,
    title: "Workflow Audit",
    desc: "We map the current process end-to-end — every manual step, every handoff, every tool in the chain. This is where the real problems surface, not just what was described in the call.",
    color: "#0EA5E9",
    optional: false,
  },
  {
    number: "03",
    icon: <Cpu size={18} />,
    title: "Solution Design",
    desc: "A written spec covering the proposed automation: what it handles, what it routes to a human, what it doesn't do, and which tools it uses. You approve this before any build starts.",
    color: "#6366F1",
    optional: false,
  },
  {
    number: "04",
    icon: <Wrench size={18} />,
    title: "Build",
    desc: "The actual build — workflow logic, integrations, conversation flows, error handling. Progress is shared as it develops, not revealed as a final deliverable.",
    color: "#00E5A0",
    optional: false,
  },
  {
    number: "05",
    icon: <ShieldCheck size={18} />,
    title: "Testing",
    desc: "The system is tested against real-world edge cases: duplicate submissions, API failures, off-hours behaviour, unexpected inputs. Issues are resolved before your team sees it.",
    color: "#F5A623",
    optional: false,
  },
  {
    number: "06",
    icon: <Rocket size={18} />,
    title: "Deployment",
    desc: "Goes live with a rollback plan in place. The first 48–72 hours are monitored closely and we stay available for anything that surfaces in production.",
    color: "#0EA5E9",
    optional: false,
  },
  {
    number: "07",
    icon: <BookOpen size={18} />,
    title: "Training & Handover",
    desc: "Every build ships with a plain-English guide: what it does, how to make common changes, what to check if something breaks. Not a diagram — a document your team can actually use.",
    color: "#6366F1",
    optional: false,
  },
  {
    number: "08",
    icon: <Users size={18} />,
    title: "Ongoing Support",
    desc: "Available for monitoring, tweaks, and expansion. Some clients want a monthly retainer; others prefer to call when they need something. Both are fine.",
    color: "#00E5A0",
    optional: true,
  },
];

// Cycle through 4 accent colours so adjacent steps never share one
const COLOURS = ["#F5A623", "#0EA5E9", "#6366F1", "#00E5A0"];

function StepRow({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const color = COLOURS[index % COLOURS.length];

  return (
    <div ref={ref} className="flex gap-5 sm:gap-8">
      {/* ── Left spine ── */}
      <div className="flex flex-col items-center flex-shrink-0" aria-hidden="true">
        {/* Step circle */}
        {!inView ? (
          <div className="w-10 h-10 rounded-xl skeleton flex-shrink-0" />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 flex-shrink-0 relative"
            style={{ background: `${color}12`, color }}
          >
            {step.icon}
            {/* Step number badge */}
            <span
              className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center"
              style={{ background: color, color: "#04060A" }}
            >
              {index + 1}
            </span>
          </motion.div>
        )}

        {/* Connector line */}
        {!isLast && (
          <div
            className="w-px flex-1 mt-2 mb-0 min-h-[24px]"
            style={{
              background: `linear-gradient(to bottom, ${color}40, ${COLOURS[(index + 1) % COLOURS.length]}20)`,
            }}
          />
        )}
      </div>

      {/* ── Right content ── */}
      <div className="pb-10 flex-1 min-w-0">
        {!inView ? (
          <SkeletonCard hasIcon={false} lines={3} />
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-2 flex-wrap">
              {/* Step number */}
              <span className="text-[10px] mono" style={{ color }}>
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-base font-bold text-white tracking-tight">
                {step.title}
              </h3>

              {/* Optional badge */}
              {step.optional && (
                <span
                  className="text-[10px] mono px-2 py-0.5 rounded border"
                  style={{
                    color,
                    borderColor: `${color}30`,
                    background: `${color}08`,
                  }}
                >
                  optional
                </span>
              )}
            </div>

            <p className="text-sm text-[#7B8FAB] leading-relaxed font-light">
              {step.desc}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-divider absolute top-0 left-0 right-0" aria-hidden="true" />
      <div className="section-divider absolute bottom-0 left-0 right-0" aria-hidden="true" />

      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[600px] rounded-full -z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(14,165,233,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── Section header ── */}
        <div className="mb-16 max-w-2xl" ref={headRef}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            className="mono text-xs text-[#F5A623] tracking-widest uppercase block mb-3"
          >
            [ How It Works ]
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight mb-5"
          >
            Eight steps.{" "}
            <span className="gradient-text">No skipped ones.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="text-[#7B8FAB] leading-relaxed font-light"
          >
            Every engagement follows the same structure. Steps may compress or expand
            depending on scope — but each one exists for a reason and none are skipped
            to save time on our side.
          </motion.p>
        </div>

        {/* ── Two-column layout: timeline left, note card right ── */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20 items-start">
          {/* Timeline */}
          <div>
            {steps.map((step, i) => (
              <StepRow
                key={step.number}
                step={step}
                index={i}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>

          {/* Sticky callout — visible on large screens */}
          <div className="hidden lg:block lg:sticky lg:top-28">
            <div className="glass rounded-2xl border border-white/[0.06] p-6 space-y-5">
              <div className="text-xs mono text-[#64748B] uppercase tracking-widest">
                {"// A NOTE ON PROCESS"}
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
                Most automation failures happen after deployment — not during the build.
                The testing, documentation, and handover steps aren't optional extras.
                They're the reason the system still works six months later.
              </p>

              <div className="border-t border-white/[0.05] pt-5 space-y-3">
                {[
                  { label: "Typical project length", value: "2–5 weeks" },
                  { label: "Client time required", value: "Minimal after kick-off" },
                  { label: "First results", value: "From deployment day" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-start gap-4">
                    <span className="text-xs text-[#64748B] font-light">{item.label}</span>
                    <span className="text-xs text-white font-medium text-right">{item.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-colors"
                style={{
                  background: "rgba(245,166,35,0.1)",
                  color: "#F5A623",
                  border: "1px solid rgba(245,166,35,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(245,166,35,0.18)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(245,166,35,0.1)";
                }}
              >
                Start with a free call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}