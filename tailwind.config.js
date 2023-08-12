/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'backgroundColor':{
        'lightBlue':'rgb(53,93,208)',
        'darkBlue':'rgb(34,60,151)',
        'orange':'#FF914D'
      },
      'colors':{
        'darkBlue':'rgb(34,60,151)',
        'lightBlue':'rgb(53,93,208)',
        'orange':'#FF914D',
        'salmon':'rgb(255,90,98)',
        'cyan':'rgb(46,204,156)',
        'violet':'rgb(96,79,191)',
        'gray':'rgb(202, 202, 202)',
        'darkerBlue':'rgb(18,34,88)'
      },
      'screens':{
        'xl':'1275px',
        'lg':'817px',
        'md':'646px',
        'sm':'546px'
      }
    },
  },
  plugins: [],
}

