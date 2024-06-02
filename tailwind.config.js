/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      red: '#e25033',
      black: '#161211',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      fontSize: {
        h1: '48px',
        h2: '36px',
      },
    },
  },
};
