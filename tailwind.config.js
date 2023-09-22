/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        mainblue: " 3E65D0",
      },
      text: {
        3.5: "14px",
      },
      width: {
        190: "760px",
      },
      height: {
        22.5: "90px",
      },
      spacing: {
        50: "200px",
        2.5: "10px",
        10.5: "42px",
        15: "60px",
      },
    },
  },
  plugins: [],
};
