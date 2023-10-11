/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "432px",
      md: "768px",
      lg: "960px",
      xl: "1440px",
    },
    colors: {
      e9eaec: "#e9eaec",
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      graydark: "#273444",
      gray: "#8492a6",
      graylight: "#d3dce6",
    },
    fontFamily: {
      lvmh_regular: ["lvmh_regular", "sans-serif"],
      lvmh_italic: ["lvmh_italic", "sans-serif"],
      avenir_next_text: ["avenir_next_text", "serif"],
    },
    extend: {
      spacing: {
        50: "200px",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
