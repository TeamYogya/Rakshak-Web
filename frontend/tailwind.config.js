/** @type {import('tailwindcss').Config} **/

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens :{
        'max-md' : {'max': '1024px'},
      },
      colors: {
        'light-gray' : '#F5F5F5',
        'gray' : '#C6C6C6',
        'dark_gray' : '#7B7B7B',
        'black' : '#3E3E3E',
        'purple_primary' : '#452FC2',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}