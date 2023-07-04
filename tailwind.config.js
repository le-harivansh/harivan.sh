const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html"
  ],
  theme: {
    fontFamily: {
      display: ['Titillium Web', ...defaultTheme.fontFamily.sans],
      heading: ['Poiret One', ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}
