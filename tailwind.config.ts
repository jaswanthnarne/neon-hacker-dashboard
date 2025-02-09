
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cyber: {
          background: "#0a0a0f",
          foreground: "#e0e0e0",
          primary: "#39ff14",
          secondary: "#1a1a20",
          accent: "#00ffff",
          muted: "#2a2a30",
          border: "#3a3a40",
        },
      },
      keyframes: {
        "glow": {
          "0%, 100%": { 
            textShadow: "0 0 4px hsl(var(--primary))",
            boxShadow: "0 0 8px hsl(var(--primary))"
          },
          "50%": { 
            textShadow: "0 0 16px hsl(var(--primary))",
            boxShadow: "0 0 20px hsl(var(--primary))"
          },
        },
        "text-reveal": {
          "0%": { 
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        "cyber-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14"
          },
          "50%": { 
            boxShadow: "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14"
          },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite",
        "text-reveal": "text-reveal 0.5s ease-out forwards",
        "cyber-pulse": "cyber-pulse 2s ease-in-out infinite",
        "matrix-rain": "matrix-rain 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
