import type { Config } from "tailwindcss";

// BBFF Design System
// Palette meaning: forest = trust & permanence, teal = sustainability & water,
// gold = growth/harvest/hope (used sparingly as the single accent).
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#EAF1EC",
          100: "#CFE0D5",
          300: "#7FAE8F",
          500: "#2F6B47",
          700: "#1B4332", // primary brand color
          900: "#102A20",
        },
        teal: {
          50: "#E9F3F3",
          300: "#7CB6BA",
          500: "#2A6F77", // sustainability accent
          700: "#1B4C52",
        },
        gold: {
          50: "#FBF3E1",
          300: "#E9C374",
          500: "#D9A441", // signature accent - use sparingly (CTAs, highlights)
          700: "#A87A28",
        },
        sand: {
          50: "#FDFBF6",
          100: "#F7F3E9", // page background
          200: "#EFE8D8",
        },
        charcoal: {
          500: "#4A473F",
          700: "#22201B", // body text
          900: "#141310",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-public-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "16px",
        full: "9999px",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(20, 19, 16, 0.08)",
        raised: "0 8px 30px rgba(20, 19, 16, 0.12)",
      },
      backgroundImage: {
        "horizon-line":
          "linear-gradient(to bottom, transparent 49%, rgba(27,67,50,0.15) 50%, transparent 51%)",
      },
    },
  },
  plugins: [],
};

export default config;
