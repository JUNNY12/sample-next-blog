/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/pages/**.{js,ts,jsx,tsx}",
  "./src/component/**.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': { 'max': '2560px' },
        'laptopL': { 'max': '1600px' },
        'laptopM': { 'max': '1440px' },
        'laptopS': { 'max': '1280px' },
        'tabletL': { 'max': '1024px' },
        'tabletM': { 'max': '920px' },
        'tabletS': { 'max': '768px' },
        'tabletXS': { 'max': '640px' },
        'mobileXL': { 'max': '540px' },
        'mobileL': { 'max': '425px' },
        'mobileM': { 'max': '375px' },
        'mobileS': { 'max': '320px' },
      },
    },
  },
  plugins: [],
}