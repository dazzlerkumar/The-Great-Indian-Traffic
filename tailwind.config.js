const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      main:'#565A5E',
      title: '#3A5788',
      subtitle: '#405C8B',
      offwhite:'#E9EAEE',
      para: '#4C6793',
      para2:'#4A555D',
      primary:'#B4D0FE',
      hararang:'#34A853',
      laalrang:'#EA4335',
      peela:'#f2f2f2',
      safed:'#fff',
      neela:'#327BF4'
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
