"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Bot, Mail, MessageSquare, Calendar, Workflow, Target } from "lucide-react";
import SkeletonCard from "@/components/SkeletonCard";

const services = [
  {
    icon: <Bot size={22} />,
    title: "AI Chatbots",
    desc: "Custom-trained conversational AI deployed on your website, app, or platform. Handles support, qualification, and FAQs autonomously.",
    tags: ["GPT-4", "Custom Training", "Live Handoff"],
    color: "#00E5A0",
    gradient: "from-[#00E5A0]/10 to-transparent",
  },
  {
    icon: <Target size={22} />,
    title: "Lead Generation Systems",
    desc: "End-to-end lead capture and qualification pipelines that identify, score, and route your best prospects automatically.",
    tags: ["Scoring", "CRM Sync", "Real-time"],
    color: "#0A84FF",
    gradient: "from-[#0A84FF]/10 to-transparent",
  },
  {
    icon: <Mail size={22} />,
    title: "Cold Email Automation",
    desc: "Personalized outreach sequences powered by AI — research, write, send, and follow up at scale without losing the human touch.",
    tags: ["Personalization", "A/B Testing", "Analytics"],
    color: "#7B61FF",
    gradient: "from-[#7B61FF]/10 to-transparent",
  },
  {
    icon: <MessageSquare size={22} />,
    title: "WhatsApp Automation",
    desc: "Automate customer communication on WhatsApp Business. Respond, qualify, book, and follow up — all on the channel they already use.",
    tags: ["WhatsApp API", "Broadcast", "Bot Flows"],
    color: "#00E5A0",
    gradient: "from-[#00E5A0]/10 to-transparent",
  },
  {
    icon: <Calendar size={22} />,
    title: "Appointment Booking",
    desc: "Intelligent booking systems that handle scheduling, reminders, rescheduling, and no-show follow-ups without any manual input.",
    tags: ["Cal.com", "Google Cal", "Auto-remind"],
    color: "#0A84FF",
    gradient: "from-[#0A84FF]/10 to-transparent",
  },
  {
    icon: <Workflow size={22} />,
    title: "AI Workflow Integrations",
    desc: "Connect your tools and automate the glue work between them. From CRMs to Slack to spreadsheets — we wire it all together.",
    tags: ["Make.com", "n8n", "Zapier"],
    color: "#7B61FF",
    gradient: "from-[#7B61FF]/10 to-transparent",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  if (!inView) {
    return (
      <div ref={ref}>
        <SkeletonCard hasIcon hasTags lines={3} />
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="service-card rounded-2xl p-6 cursor-default relative overflow-hidden border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-4">
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${service.color}15`, color: service.color }}
        >
          {service.icon}
        </motion.div>
        <h3 className="text-base font-bold mt-1 font-space">{service.title}</h3>
      </div>

      <p className="text-sm text-[#7B8FAB] leading-relaxed mb-5 font-light">{service.desc}</p>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs mono px-2.5 py-1 rounded-md"
            style={{
              background: `${service.color}10`,
              color: service.color,
              border: `1px solid ${service.color}20`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} pointer-events-none`}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-28">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full -z-10"
        style={{
          background: "radial-gradient(ellipse, rgba(10,132,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="mono text-xs text-[#00E5A0] tracking-widest uppercase"
          >
            What We Build
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight mt-4"
          >
            Six systems that <span className="gradient-text">move the needle</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#7B8FAB] mt-4 max-w-lg mx-auto font-light"
          >
            Practical, deployed AI — not prototypes. Every service is scoped, built, and handed off
            ready to run.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}