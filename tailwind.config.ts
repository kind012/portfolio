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
      boxShadow: {
        big: "0 4px 12px rgba(0, 0, 0, 0.2)",
      },
      blur: {
        big: "16px",
      },
      animation: {
        spinn: "spinn 6s linear infinite",
      },
      keyframes: {
        spinn: {
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      fontFamily: {
        Antonio: "Antonio",
        NeueMontreal: "Neue Montreal",
        XSpace: "X-Space",
      },
      borderColor: {
        primary: {
          600: "#a8a29e",
        },
        secondary: {
          100: "#000",
        },
      },
      backgroundColor: {
        primary: {
          400: "#a8a29e",
        },
        secondaryrgb: {
          255: "rgba(255,255,255,0.1)",
        },
      },
    },
  },
  darkMode: "class",
};
