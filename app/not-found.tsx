"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "#03080F" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #00E5A0, #0A84FF)" }}
          >
            <span
              className="text-lg font-bold text-[#03080F]"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              R
            </span>
          </div>
        </div>

        <div
          className="text-8xl font-bold mb-4 gradient-text"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          404
        </div>

        <h1
          className="text-2xl font-bold text-white mb-4"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Page not found
        </h1>

        <p className="text-[#7B8FAB] mb-8 font-light">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm group"
        >
          <ArrowLeft
            size={15}
            className="group-hover:-translate-x-1 transition-transform relative z-10"
          />
          <span>Back to home</span>
        </Link>
      </motion.div>
    </div>
  );
}