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
        third: '#86BBD8'
      },
      backgroundImage:{
        'ombak':"url(./assets/About/ombak.svg)"
      }
    },
  },
  plugins: [],
}

