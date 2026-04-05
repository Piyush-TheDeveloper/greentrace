/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#6b8f71",
          50: "#f0f5f1",
          100: "#d6e8d8",
          200: "#aacfaf",
          300: "#82b589",
          400: "#6b8f71",
          500: "#557360",
          600: "#415a4b",
          700: "#2d4035",
          800: "#1a2720",
          900: "#0a100d",
        },
        cream: {
          DEFAULT: "#f5f0e8",
        },
        slate: {
          DEFAULT: "#3d4f4a",
        },
        terracotta: {
          DEFAULT: "#c4704a",
          light: "#e8956a",
        },
      },
      fontFamily: {
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
