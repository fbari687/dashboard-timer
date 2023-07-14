/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: "#259047",
        secondary: "#ffcb45",
        "primary-20": "#D3E9DA",
        dark: "#393938",
        disable: "#777675",
        divide: "#d9d9d9",
        "alert-success": "#52C41A",
        "alert-cancel": "#FF4D4F",
        overlay: "rgba(0, 0, 0, 0.5)",
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
      boxShadow: {
        "inner-custom": "1px 5px 27px 4px rgba(56,56,56,0.64) inset;",
      },
    },
  },
  plugins: [],
};
