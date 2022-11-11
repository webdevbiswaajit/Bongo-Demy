/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      rubic: ["Rubik, sans-serif"],
    },
    extend: {
      colors: {
        "dark-blue": "#1E2D40",
        "light-green": "#0ED7A8",
      },
    },
  },
  plugins: [],
};
