"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Search size={20} />,
    title: "Audit",
    subtitle: "Understand your workflows",
    desc: "We map your current processes, identify the highest-ROI automation opportunities, and define the exact systems to build. No fluff, just clarity.",
    color: "#00E5A0",
    items: ["Process mapping", "ROI analysis", "Tech stack review", "Priority matrix"],
  },
  {
    number: "02",
    icon: <Cpu size={20} />,
    title: "Automate",
    subtitle: "Build and deploy",
    desc: "We build your custom AI systems using the right tools for the job. Tested, documented, and integrated into your existing stack.",
    color: "#0A84FF",
    items: ["Custom AI builds", "API integrations", "Testing & QA", "Documentation"],
  },
  {
    number: "03",
    icon: <Rocket size={20} />,
    title: "Scale",
    subtitle: "Optimize and grow",
    desc: "We monitor performance, optimize based on real data, and expand your automation coverage as your business grows. Ongoing support included.",
    color: "#7B61FF",
    items: ["Performance tracking", "Iterative improvements", "Expansion roadmap", "Ongoing support"],
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-28 overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      {/* BG decoration */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full -z-0"
        style={{ background: "radial-gradient(ellipse, rgba(0,229,160,0.03) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="mono text-xs text-[#00E5A0] tracking-widest uppercase"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight mt-4"
          >
            From zero to{" "}
            <span className="gradient-text">automated</span>{" "}
            in three steps
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="absolute top-14 left-[16.5%] right-[16.5%] h-px hidden lg:block"
            style={{ background: "linear-gradient(90deg, #00E5A0, #0A84FF, #7B61FF)" }} />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const stepRef = useRef(null);
              const stepInView = useInView(stepRef, { once: true, margin: "-80px" });

              return (
                <motion.div
                  key={step.number}
                  ref={stepRef}
                  initial={{ opacity: 0, y: 40 }}
                  animate={stepInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center lg:text-left lg:items-start"
                >
                  {/* Step circle */}
                  <div className="relative mb-8">
                    <div
                      className="w-28 h-28 rounded-full flex items-center justify-center relative z-10"
                      style={{
                        background: `${step.color}12`,
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ background: `${step.color}20`, color: step.color }}
                      >
                        {step.icon}
                      </div>
                    </div>
                    {/* Number badge */}
                    <div
                      className="absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: step.color,
                        color: "#03080F",
                        fontFamily: "Syne",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-xs mono mb-1" style={{ color: step.color }}>
                      {step.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "Syne" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#7B8FAB] leading-relaxed mb-5 font-light">
                      {step.desc}
                    </p>

                    {/* Checklist */}
                    <div className="space-y-2">
                      {step.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 justify-center lg:justify-start">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: step.color }} />
                          <span className="text-xs text-[#7B8FAB]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
