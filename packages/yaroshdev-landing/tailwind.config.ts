const rgbToLab = (r: number, g: number, b: number): { l: number; a: number; b: number } => {
  // Normalize RGB values to 0-1 range
  const rNorm = r / 255
  const gNorm = g / 255
  const bNorm = b / 255

  // Apply gamma correction (sRGB to linear RGB)
  const toLinear = (c: number) => (c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92)
  const rLinear = toLinear(rNorm)
  const gLinear = toLinear(gNorm)
  const bLinear = toLinear(bNorm)

  // Convert linear RGB to XYZ using sRGB matrix
  let x = rLinear * 0.4124564 + gLinear * 0.3575761 + bLinear * 0.1804375
  let y = rLinear * 0.2126729 + gLinear * 0.7151522 + bLinear * 0.072175
  let z = rLinear * 0.0193339 + gLinear * 0.119192 + bLinear * 0.9503041

  // Normalize by D65 illuminant
  x /= 0.95047
  y /= 1.0
  z /= 1.08883

  // XYZ to LAB conversion
  const f = (t: number) => (t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116)
  const fx = f(x)
  const fy = f(y)
  const fz = f(z)

  const l = 116 * fy - 16
  const a = 500 * (fx - fy)
  const bValue = 200 * (fy - fz)

  return { l: Math.round(l), a: Math.round(a), b: Math.round(bValue) }
}

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
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        accent: 'var(--color-accent)',
        neutral: 'var(--color-neutral)',

        title: 'var(--title-color)',
        border: 'var(--border-color)',
        cardBackground: 'var(--card-background-color)'
      }
    }
  },
  plugins: []
}
