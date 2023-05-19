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
      },
      spacing: {
        '320': '320px',
        '375': '375px',
        '400': '400px',
        '570': '570px',
        '1110': '1110px'
      }
    },
  },
  plugins: [],
}

