/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        darkCyan: 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',
        darkGrayishBlue: 'hsl(212, 21%, 14%)',
      },
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'fraunces': ['"Fraunces"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
