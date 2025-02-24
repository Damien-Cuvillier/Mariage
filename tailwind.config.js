/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'old-standard': ['"Old Standard TT"', 'serif'],
      }
    },
  },
  plugins: [],
}