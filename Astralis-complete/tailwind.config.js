/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        primary: "hsl(var(--primary))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        fuchsia: "#C026D3"
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
        display: "var(--font-display)",
        mono: "var(--font-mono)"
      },
      keyframes: {
        twinkle: { "0%,100%": { opacity: ".25" }, "50%": { opacity: "1" } },
        floatSlow: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        spinSlow: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        fadeUp: { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } }
      },
      animation: {
        twinkle: "twinkle 4s ease-in-out infinite",
        "float-slow": "floatSlow 18s ease-in-out infinite",
        "spin-slow": "spinSlow 120s linear infinite",
        "fade-up": "fadeUp .7s cubic-bezier(.22,1,.36,1) both"
      }
    }
  },
  plugins: []
};