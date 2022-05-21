module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Nunito','sans-serif']
    },
    extend: {      
        // that is animation class
        animation: {
          fadein: 'fadeIn 1s ease-in-out',
          fadeOut: 'fadeOut 1s ease-in-out',
        },
  
        // that is actual animation
        keyframes: theme => ({
          fadeIn: {
            '0%': { opacity: 0,backgroundColor:theme('colors.transparent') },
            '100%': { opacity: 1, backgroundColor:theme('colors.slate.800')},
          },
          fadeOut: {
            '0%': { opacity: 1, backgroundColor:theme('colors.slate.800')},
            '100%': { opacity: 0, backgroundColor:"rgba(0,0,0,0)" },
          },
        }),
  
    },
  },
  plugins: [],
}
