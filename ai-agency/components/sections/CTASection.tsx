"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,229,160,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="mono text-xs text-[#00E5A0] tracking-widest uppercase">
            Ready to Start?
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-5 mb-6">
            Ready to automate repetitive work{" "}
            <span className="gradient-text">and capture more leads?</span>
          </h2>

          <p className="text-[#7B8FAB] text-lg font-light max-w-xl mx-auto mb-10">
            Book a free 30-minute strategy call. We{"'"}ll identify your top automation opportunities
            and show you exactly how we{"'"}d build them.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <motion.a
              href="mailto:hello@relayops.ai"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary px-8 py-4 rounded-xl text-base flex items-center gap-2.5 group"
            >
              <span>Book Free Consultation</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform relative z-10" />
            </motion.a>
            <motion.a
              href="mailto:hello@relayops.ai"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline px-8 py-4 rounded-xl text-base flex items-center gap-2.5"
            >
              <Mail size={16} />
              Contact Us
            </motion.a>
          </div>

          {/* Reassurance */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#7B8FAB]">
            {[
              "No commitment required",
              "30-minute session",
              "Direct with senior engineers",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0]" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
