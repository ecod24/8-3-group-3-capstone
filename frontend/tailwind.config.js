/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fonts: ["Noto"],
      },
      colors: {
        logopurple: "#512082",
        logored: "#E14F62",
        beige: "#E8DDCC",
        green: "#EEF3E7",
        red: "#AE2A3F",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
