/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./table.html", "./user.html"],
  theme: {
    extend: {
      colors: {
        primary: "#259047",
        secondary: "#ffcb45",
        "primary-20": "#D3E9DA",
        dark: "#393938",
        disable: "#777675",
        divide: "#d9d9d9",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        hd: "1366px",
        fhd: "1920px",
      },
      borderRadius: {
        "2.5xl": "20px",
      },
    },
  },
  plugins: [],
};
