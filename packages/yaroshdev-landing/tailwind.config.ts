/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        monoton: ['Monoton', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      }
    }
  },
  plugins: []
}
