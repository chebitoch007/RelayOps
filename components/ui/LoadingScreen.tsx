"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "#03080F" }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
                style={{ background: "linear-gradient(135deg, #00E5A0, #0A84FF)" }}>
                <span className="text-2xl font-bold text-[#03080F]" style={{ fontFamily: "Syne, sans-serif" }}>A</span>
              </div>
              <div className="absolute inset-0 rounded-2xl pulse-glow" />
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-center"
            >
              <div className="text-xl font-bold gradient-text" style={{ fontFamily: "Syne, sans-serif" }}>
                Relay<span className="gradient-text">Ops</span>
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-32 h-px bg-white/10 overflow-hidden rounded-full"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
                className="h-full"
                style={{ background: "linear-gradient(90deg, #00E5A0, #0A84FF)" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
