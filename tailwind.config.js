/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        border: "#222222",
        button: "#191919",
        heading: "#343434",
        primaryPurple: "#8261D0",
        secondaryPurple: "#916CE7",
        grayLight: "#CCCCCC",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
