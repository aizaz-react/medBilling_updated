/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ['Oswald', 'sans-serif'],
        Lato: ['Lato', 'sans-seri']
      },
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
        // blue: '#008ac6',
        darkgray: '#FBFBFBFC',
        secondary: '#0a7caf',
        servicecolor: '#20406',
        elementcolor: '#204066',
        borderstyledark: '#cbcbcb',
        divideroclor: '#c35817',

      }
    },
  },
  plugins: [],
}