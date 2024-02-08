/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      extend: {
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 100 },
          },
        },
        animation: {
          fadeIn: "fadeIn 0.2s ease-in-out forwards",
        },
      },
      colors: {
        blue: '#008ac6',
        darkgray: '#FBFBFBFC',
        darkblue: '#008ac6',
        servicecolor: '#20406',
        elementcolor: '#204066',
        borderstyledark: '#cbcbcb',

      }
    },
  },
  plugins: [],
}