// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

const newColors = {
  ...colors,
  primary: "#F47E21",
  accent: "#80ED99",
  link: "#80ED99",
  "light-gray": "#F5F5F5",
  "admin-link": "#0FC670",
  "admin-primary": "#2D719F",
  "admin-primary-dark": "#1768A0",
  "admin-danger": "#FC484D",
  "admin-danger-dark": "#FC0A11",
  "admin-danger-light": "#FFC6D6",
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1180px",
      xl: "1320px",
    },
    colors: {
      ...newColors,
    },
    backgroundColor: {
      ...newColors,
      "admin-grey": "rgb(239, 240, 244)",
    },
    textColor: {
      ...newColors,
      "primary-on-accent": "#19323C",
      "background-primary": "#22577A",
      "admin-primary": "#19323C",
    },
    fontFamily: {
      // bodoni: ["Bodoni Moda", "sans-serif"],
      bodoni: ["var(--font-bodoni)", ...fontFamily.sans],
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "home-pattern": "url('/homepage-portrait.png')",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
        slide: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(3px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        slide: "slide 1s ease-in-out infinite",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
