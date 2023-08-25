/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      text: {
        3.5: "14px",
      },
      width: {
        190: "760px",
      },
      spacing: {
        2.5: "10px",
        10.5: "42px",
      },
    },
  },
  plugins: [],
};
