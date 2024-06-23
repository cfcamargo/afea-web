/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary':"#553A81",
        'secondary': '#FFCD1D',
        'text': '#81818B'
      },
      screens: {
        'xs': '360px',
      }
    },
  },
  plugins: [],
}

