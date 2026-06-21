import type { Config } from "tailwindcss";

// Tokens sourced directly from design.md — semantic, not raw hex in components.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: {
          DEFAULT: "#0f0e0c",
        },
        surface: {
          base: "#000000",
          muted: "#ffffff",
          strong: "#f8f6f2",
        },
        text: {
          primary: "#0f0e0c",
          secondary: "#5c5954",
          tertiary: "#0000ee",
          inverse: "#edebe4",
          muted: "#8a8680",
        },
        focus: "#0000ee",
      },
      fontFamily: {
        primary: ["Cabinet Grotesk", "Inter", "ui-sans-serif", "sans-serif"],
      },
      fontSize: {
        // Base UI scale from design.md
        xs: ["10.5px", { lineHeight: "normal" }],
        sm: ["11px", { lineHeight: "normal" }],
        md: ["12px", { lineHeight: "normal" }],
        lg: ["13px", { lineHeight: "normal" }],
        xl: ["14px", { lineHeight: "normal" }],
        "2xl": ["14.5px", { lineHeight: "normal" }],
        "3xl": ["15px", { lineHeight: "normal" }],
        "4xl": ["16px", { lineHeight: "1.2" }],
        // Extended display scale, derived multiples of the base unit (16px)
        // for hero/section headings — kept proportional to the token system.
        "display-sm": ["28px", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-md": ["40px", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-lg": ["56px", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-xl": ["80px", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
      },
      spacing: {
        1: "6px",
        2: "7px",
        3: "8px",
        4: "10px",
        5: "11px",
        6: "12px",
        7: "13px",
        8: "14px",
        9: "20px",
        10: "28px",
        11: "40px",
        12: "56px",
        13: "80px",
        14: "112px",
        15: "160px",
      },
      borderRadius: {
        xs: "3px",
        sm: "14px",
        md: "22px",
        lg: "28px",
        xl: "50px",
        "2xl": "100px",
      },
      boxShadow: {
        1: "rgba(15, 14, 12, 0.06) 0px 4px 24px 0px, rgba(15, 14, 12, 0.04) 0px 1px 4px 0px",
        2: "rgba(160, 200, 255, 0.22) 0px 0px 22px 0px inset, rgba(255, 255, 255, 0.45) 0px 1px 0px 0px inset, rgba(0, 20, 80, 0.14) 0px 4px 20px 0px",
        3: "rgba(0, 0, 0, 0.4) 0px 6px 24px 0px",
        4: "rgba(0, 0, 0, 0.14) 0px 2px 14px 0px",
      },
      transitionDuration: {
        instant: "180ms",
        fast: "200ms",
        normal: "220ms",
        slow: "280ms",
        slower: "300ms",
        step6: "380ms",
        step7: "500ms",
        step8: "720ms",
      },
    },
  },
  plugins: [],
};

export default config;
