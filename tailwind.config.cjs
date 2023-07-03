/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'alata': ['Alata', 'sans-serif'],
      'josefin': ['Josefin Sans', 'sans-serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {},
  },
  plugins: [],
}
