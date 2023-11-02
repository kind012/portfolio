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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        pattern: "url('/bg-black-pattern.png')",
      },
      backgroundSize: {
        sizeMb: "400px 270px, cover",
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
        GeneralSans: "General Sans",
        ClashGrotesk: "Clash Grotesk",
      },
      fontSize: {
        "body-1": "clamp(1.1rem, 2vw, 1.3rem)",
        "body-2": "clamp(1rem, 1.5vw, 1.5rem)",
        "body-3": "clamp()",
        "body-4": "clamp(.75rem, 3vw,1rem)",
        "body-5": "clamp()",
        "heading-1": "",
        "heading-2": "clamp(2.4rem, 8vw, 10rem)",
        "heading-3": "clamp(2rem, 5vw, 2.75rem)",
        special: "clamp(2rem, 4vw, 3.25rem)",
        title: "clamp(1.2rem, 2vw, 1.5rem)",
      },
      borderColor: {
        primary: {
          600: "#a8a29e",
        },
      },
      backgroundColor: {
        primary: {
          400: "#a8a29e",
        },
      },
    },
  },
  darkMode: "class",
};
