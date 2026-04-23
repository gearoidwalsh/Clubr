import type { Config } from "tailwindcss";

/** Content paths for tooling; theme tokens live in `app/globals.css` (@theme). */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        card: "#0a0a0a",
        elevated: "#111111",
        white: "#f0f0f0",
        muted: "#888888",
        gold: {
          DEFAULT: "#FDB515",
          bright: "#fcc94a",
          dim: "#c49010",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
} satisfies Config;
