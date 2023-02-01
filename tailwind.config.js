/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./client/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      animation:{
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25.5s linear infinite',
        bounce: ' bounce ease-in 1s'
    },
      keyframes:{
        marquee: {
          '0%': { transform: 'translateX(300%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(130%)',
         },
          '100%': { transform: 'translateX(0%)' },
        },
        bounce: {
          '0% , 100%': {transform: 'translateY(0%)'},
          '50%': {transform: 'translateY(100%)'}
        },
      },
      screens:{
        'sm':'360px',
        'md':'768px',
        '2xl':'1200px',
        '3xl':'1600px',
      }
    },
  },
  
  
  plugins: [],
}



