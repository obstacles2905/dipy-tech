import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0a0c10",
          soft: "#12151c",
          muted: "#1a1f28",
        },
        titanium: {
          DEFAULT: "#c8ccd4",
          dim: "#9aa3b2",
          bright: "#e8eaef",
        },
        amber: {
          highlight: "#c9a227",
          glow: "#d4af37",
        },
        lab: {
          page: "#f4f4f5",
          surface: "#ffffff",
          border: "#e4e4e7",
          ink: "#18181b",
          muted: "#71717a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grain-soft":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      transitionDuration: {
        theme: "320ms",
      },
    },
  },
  plugins: [],
};

export default config;
