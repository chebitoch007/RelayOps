import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        "bg-primary": "#03080F",
        "bg-secondary": "#071020",
        "bg-card": "#0A1628",
        "accent-teal": "#00E5A0",
        "accent-blue": "#0A84FF",
        "accent-purple": "#7B61FF",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 229, 160, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 229, 160, 0.4)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
