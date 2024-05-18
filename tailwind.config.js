/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{'StrongCyan': ['hsl(171, 66%, 44%)'],
              'LightBlue': ['hsl(233, 100%, 69%)'],
              'DarkGrayishBlue': ['hsl(210, 10%, 33%)'],
              'GrayishBlue':[' hsl(201, 11%, 66%)'],
             },
             maxWidth:{'15':['375px']},
             fontFamily:{'BaiJamjuree':['Bai Jamjuree']},
             width:{'101':['41rem'],
              '95':['23rem'],
              '93':['22rem']
             },
             padding:{'6.2':['1.8rem'],
              '86':['21rem'],
             },
             inset:{'102':['41rem']},
             backgroundImage:{'mobile':"url('./images/bg-header-mobile.png')",
                              'desktop':"url('./images/bg-header-desktop.png')"  
             },
             margin:{'108':['40rem'],
                      '106':['30rem'],
             },
             
    },
  },
  plugins: [],
}