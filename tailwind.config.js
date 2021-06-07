const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],

  darkMode: false,

  theme: {
    container: {
      center: true,
    },

    screens: {
      'xs': '445px',
      ...defaultTheme.screens
    },

    extend: {
      colors: {
        gray: colors.trueGray,
        yellow: colors.amber,
      }
    }
  },

  variants: {
    extend: {},
  },
  
  plugins: [],
}
