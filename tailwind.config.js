import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
  themes: {
    light: {
      colors: {
        primary: {
          50: "#e8f9f0",
          100: "#d1f3e1",
          200: "#a3e7c3",
          300: "#75dca5",
          400: "#47d087",
          500: "#17c964", 
          600: "#12a350",
          700: "#0d7c3c",
          800: "#085628",
          900: "#042f14",
          foreground: "#000000",
          DEFAULT: "#17c964",
        },
      },
    },
    dark: {
      colors: {
       primary: {
          50: "#e8f9f0",
          100: "#d1f3e1",
          200: "#a3e7c3",
          300: "#75dca5",
          400: "#47d087",
          500: "#17c964", 
          600: "#12a350",
          700: "#0d7c3c",
          800: "#085628",
          900: "#042f14",
          foreground: "#000000",
          DEFAULT: "#17c964",
        },
      }
    }
  }
})],

}

