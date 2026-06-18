"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Zap, RefreshCw, ArrowUpRight } from "lucide-react";
import SkeletonCard from "@/components/SkeletonCard";

const benefits = [
  {
    icon: <Clock size={20} />,
    title: "Save Hours Weekly",
    desc: "Eliminate the manual work that drains your team. Our systems handle repetitive tasks 24/7 so your people focus on what actually matters.",
    color: "#00E5A0",
    delay: 0,
  },
  {
    icon: <Zap size={20} />,
    title: "Respond to Leads Instantly",
    desc: "AI responds to inbound leads in under 2 seconds - qualifying, tagging, and routing them before a human would even open their inbox.",
    color: "#0A84FF",
    delay: 0.1,
  },
  {
    icon: <RefreshCw size={20} />,
    title: "Automate Repetitive Tasks",
    desc: "From follow-up sequences to appointment confirmations, we map and automate your highest-frequency workflows with precision.",
    color: "#7B61FF",
    delay: 0.2,
  },
  {
    icon: <ArrowUpRight size={20} />,
    title: "Scale Without Hiring",
    desc: "Handle 10x the volume without adding headcount. AI systems scale linearly with demand - your costs don't.",
    color: "#00E5A0",
    delay: 0.3,
  },
];

function BenefitCard({
  icon,
  title,
  desc,
  color,
  delay,
}: (typeof benefits)[0]) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  if (!inView) {
    return (
      <div ref={ref}>
        <SkeletonCard hasIcon={false} lines={4} />
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-6 rounded-2xl border border-white/6 bg-white/2 hover:bg-white/4 hover:border-white/10 transition-all duration-300 cursor-default"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
        style={{ background: `${color}15`, color }}
      >
        {icon}
      </div>

      <h3 className="text-base font-bold mb-2.5 font-space">{title}</h3>
      <p className="text-sm text-[#7B8FAB] leading-relaxed font-light">{desc}</p>

      <div
        className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}40, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex mb-4"
          >
            <span className="mono text-xs text-[#00E5A0] tracking-widest uppercase">
              Why RelayOps
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Built for results,{" "}
            <span className="gradient-text">not complexity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#7B8FAB] mt-4 max-w-lg mx-auto font-light"
          >
            Every system we build has one job: make your business faster and more profitable.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <BenefitCard key={b.title} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}