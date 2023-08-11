/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      'dark-grey': '#121212',
      indigo: '#5F5BE6',
      'indigo-light': '#7571EA',
      'surface-grey': '#181818',
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue,
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '4rem',
        lg: '4rem',
        xl: '4.5rem',
      },
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
