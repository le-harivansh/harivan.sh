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
    extend: {
      animation: {
        gradient: 'gradient 10s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}
