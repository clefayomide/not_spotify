/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ipad_min: "768px",
        ipad_max: "820px",
      },
      fontFamily: {
        Gotham_Bold: ["Gotham-Bold"],

        Gotham_Book: ["Gotham-Book"],
        Gotham_Light: ["Gotham-Light"],
        Gotham_Medium_1: ["Gotham-Medium_1"],
        Gotham_Medium: ["Gotham-Medium"],
      },
      colors: {
        lime_green: "#32cd32",
        light_purple: "#8F00FF",
        light_dark: "#171717",
        lighter_dark: "#2E2E2E",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
