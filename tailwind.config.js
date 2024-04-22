/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
'xs':'250px',
'sm':'400px',
'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',

    },
    extend: {
      colors:{
        darkblue:'#124C81',
        green:'background: #1B9C85',
        lightblue:'background: #E2E8F0',
        footerclr:' #0000005C',
      },
      fontFamily:{
        Montserrat:'Montserrat'
      }
    },
  },
  plugins: [],
}
