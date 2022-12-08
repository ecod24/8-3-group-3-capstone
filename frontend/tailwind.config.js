/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fonts: ["Noto"],
      },
      colors: {
        logopurple: "#4B1E7F",
        logored: "#E14F62", //buttons
        beige: "#E8DDCC",
        green: "#EEF3E7",
        red: "#AE2A3F", //text 
        rosered: "#BE123C", //text
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
