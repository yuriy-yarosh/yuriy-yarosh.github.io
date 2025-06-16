/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xxs: '240px'
      },
      fontFamily: {
        monoton: ['Monoton', 'sans-serif'],
        castoro: ['Castoro', 'sans-serif']
      },
      animation: {
        fadeInBg: 'fadeInBg 1.5s ease-in-out forwards'
      },
      keyframes: {
        fadeInBg: {
          '0%': { backgroundColor: 'rgba(255, 255, 255, 0)' },
          '100%': { backgroundColor: 'rgba(255, 255, 255, 0.95)' }
        }
      }
    }
  },
  plugins: []
}
