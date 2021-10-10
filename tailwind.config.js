module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'brief-color': '#3A5788',
      'subtitle': '#405C8B',
      'para': '#4C6793',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
