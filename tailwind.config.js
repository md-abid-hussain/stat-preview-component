/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
        'lexendDeca': ['Lexend Deca']
      },
      colors: {
        'very-dark-blue': '#090b1a',
        'dark-desaturated-blue': '#1b1938',
        'soft-violet': '#aa5cdb'
      }
    },
  },
  plugins: [],
}

