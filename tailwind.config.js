// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

const newColors = {
  ...colors,
  primary: "#F47E21",
  accent: "#80ED99",
  link: "#80ED99",
  black: "#1E1E1E",
  "light-gray": "#F5F5F5",
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
    },
    textColor: {
      ...newColors,
      "primary-on-accent": "#19323C",
      "background-primary": "#22577A",
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
      fontFamily: {
        bodoni: ["var(--font-bodoni)"],
        manrope: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};
