import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0B0E14",
        surface: "#131720",
        surface2: "#181D29",
        line: "#232838",
        ink: "#E6E8EC",
        muted: "#8A8F9C",
        signal: "#3ECF8E",
        signaldark: "#1F8F63",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
