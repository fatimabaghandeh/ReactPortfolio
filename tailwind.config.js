/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./api/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarybg: "#f3f3f3",
        primarytext: "#363636",
        primarywhite: "#ffffff",
      },
      screens: {
        "mobile": "-450px"
      },
      fontFamily: {
        'custom-mono': ['Monaco', 'Consolas', 'Lucida Console', 'monospace'],
      },
      animation: {
        caret: 'caret 1s steps(1) infinite',
      },
      keyframes: {
        caret: {
          '50%': { backgroundColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}
