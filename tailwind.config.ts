/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "4.7rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url(/assets/images/thumnail-portfolio.png)",
      },
      fontSize: {
        "display-0": "clamp(3rem, -.057rem + 10.0714vw, 10.25rem)",
        heading: "clamp(3.5rem, 2.3571rem + 4.5143vi, 10.5rem)",
        number: "clamp(8rem, -.057rem + 20.0714vw, 20rem)",
        link: "1.25rem",
      },
      fontFamily: {
        OverusedGrotesk: "Overused Grotesk",
        Arges: "Arges",
      },

      colors: {
        secondary: {
          300: "#393632",
        },
        primary: {
          400: "#ece6d5",
        },
        third: {
          500: "#8C837B",
        },
        beige: {
          100: "#bfbfb1",
          200: "#7e766c",
          300: "#0a0a09",
          400: "#ddddd5",
          500: "#8c8c73",
          600: "#e3e3dd",
          700: "#e8e8e3",
        },
        error: {
          100: "#9E1F1F",
        },
      },
    },
  },
  darkMode: "class",
};
