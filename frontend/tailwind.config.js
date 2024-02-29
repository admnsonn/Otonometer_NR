/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#EFF7FB',
        secondary: '#24445A',
        third: '#86BBD8',
        infield1: '#A7A7A7',
        infield2: '#E4E5F0',
      },
      backgroundImage:{
        'ombak':"url(./assets/About/ombak.svg)"
      }
    },
  },
  plugins: [],
}

