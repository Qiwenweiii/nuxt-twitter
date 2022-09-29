/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],

  darkMode: 'class',

  theme: {
    screens: {
      xs: '614px',
      sm: '1002px',
      md: '1022px',
      lg: '1092px',
      xl: '1280px',
    },

    extend: {
      colors: {
        dim: {
          50: '#5f99f7',
          100: '#5ff99f7',
          200: '#38444d',
          300: '#202e3a',
          400: '#253341',
          500: '#5f99f7',
          600: '#5f99f7',
          700: '#192734',
          800: '#162d40',
          900: '#15202b',
        },
      },
    },
  },
  plugins: [],
};
