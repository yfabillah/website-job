/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: "#FF8585",
        secondary: "#9899E8",
        blue: "#5484CD",
        darkblue: "#5D5FEF",
        black: "#222222",
        white: "#FFFFFF",
        gray: "#D9D9D9"
      }
    },
  },
  plugins: [],
}