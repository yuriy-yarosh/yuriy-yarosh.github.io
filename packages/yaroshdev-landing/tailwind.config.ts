/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-16px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(16px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-16px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fadeInUp 0.6s ease-out both',
        'fade-in-delay-1': 'fadeInUp 0.6s ease-out 0.2s both',
        'fade-in-delay-2': 'fadeInUp 0.6s ease-out 0.4s both',
        'fade-in-delay-3': 'fadeInUp 0.6s ease-out 0.6s both',
        'fade-in-delay-4': 'fadeInUp 0.6s ease-out 0.8s both',
        'slide-in-left': 'fadeInLeft 0.6s ease-out both',
        'slide-in-left-delay-1': 'fadeInLeft 0.6s ease-out 0.2s both',
        'slide-in-right': 'fadeInRight 0.6s ease-out both',
        'slide-in-right-delay-1': 'fadeInRight 0.6s ease-out 0.2s both',
        'slide-in-right-delay-2': 'fadeInRight 0.6s ease-out 0.4s both'
      }
    }
  },
  plugins: []
}
