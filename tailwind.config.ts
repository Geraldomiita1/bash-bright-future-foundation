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
        // BBFF palette: Forest Green + Golden Yellow + Warm Ivory. No other bright colours.
        forest: {
          50: "#E8EFE9", // Muted Sage — tags, soft backgrounds
          100: "#E8EFE9",
          300: "#7FAE8F",
          500: "#287A57", // Emerald Green
          700: "#164B3A", // Deep Forest Green — primary, headings
          900: "#164B3A", // footer
        },
        teal: {
          // Kept as a token name for existing classes; now Emerald Green.
          50: "#E8EFE9",
          300: "#7FAE8F",
          500: "#287A57", // Emerald — icons, highlights
          700: "#1F6347",
        },
        gold: {
          50: "#FBF3E1",
          300: "#E9C374",
          500: "#D9A441", // Golden Yellow — buttons, accents
          700: "#B8892F",
        },
        sand: {
          50: "#FFFFFF", // Pure White — cards and content sections
          100: "#FAF8F1", // Warm Ivory — page background
          200: "#E6E6E1", // Light Grey — borders and dividers
        },
        charcoal: {
          500: "#55615A",
          700: "#303A35", // body text
          900: "#1F2723",
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
