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
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui'],
        'serif': ['Poppins', 'ui-serif', 'Georgia'],
        'mono': ['Menlo', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        blue: '#008ac6',
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