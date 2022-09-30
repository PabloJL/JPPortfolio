/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      colors: {
        "background-dm": "#16161a",
        "headlines-dm": "#fffffe",
        "p-dm": "#94a1b2",
        "button-dm": "#7f5af0",
      },
    },
  },
  plugins: [],
};
