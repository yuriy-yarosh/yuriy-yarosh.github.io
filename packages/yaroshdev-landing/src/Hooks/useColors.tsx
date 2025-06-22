/*
 * Copyright (C) 2016-2025 Yuriy Yarosh
 * All rights reserved.
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { createContext, useContext, useEffect, useState } from 'react'
import { useSunDial, TimeOfDay } from 'Landing/Hooks'

type ColorsContextType = {
  isDark: boolean
  toggleTimeOfDay: () => void
}

type LabColor = { l: number; a: number; b: number }

const DARK_TIME_PERIODS = ['evening', 'dusk', 'night', 'dawn'] as const
const TIME_OF_DAY_VALUES = ['night', 'dawn', 'morning', 'noon', 'afternoon', 'evening', 'dusk'] as TimeOfDay[]

const BASE_RGB_COLORS = {
  night: [25, 25, 112],
  dawn: [255, 94, 77],
  morning: [255, 215, 0],
  noon: [135, 206, 235],
  afternoon: [255, 235, 59],
  evening: [255, 165, 0],
  dusk: [75, 0, 130]
} as const

// Color space conversion utilities
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))
const toLinear = (c: number) => (c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92)
const toSrgb = (c: number) => (c > 0.0031308 ? 1.055 * c ** (1 / 2.4) - 0.055 : 12.92 * c)

const rgbToLab = (r: number, g: number, b: number): LabColor => {
  // RGB -> XYZ
  const [rLinear, gLinear, bLinear] = [r / 255, g / 255, b / 255].map(toLinear)
  const x = (rLinear * 0.4124564 + gLinear * 0.3575761 + bLinear * 0.1804375) / 0.95047
  const y = (rLinear * 0.2126729 + gLinear * 0.7151522 + bLinear * 0.072175) / 1.0
  const z = (rLinear * 0.0193339 + gLinear * 0.119192 + bLinear * 0.9503041) / 1.08883

  // XYZ -> LAB
  const f = (t: number) => (t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116)
  const [fx, fy, fz] = [x, y, z].map(f)

  return {
    l: Math.round(116 * fy - 16),
    a: Math.round(500 * (fx - fy)),
    b: Math.round(200 * (fy - fz))
  }
}

const labToRgb = ({ l, a, b }: LabColor): [number, number, number] => {
  // LAB -> XYZ
  const fy = (l + 16) / 116
  const fx = a / 500 + fy
  const fz = fy - b / 200
  const f3 = (t: number) => (t > 0.206893 ? t ** 3 : (t - 16 / 116) / 7.787)
  const [x, y, z] = [f3(fx) * 0.95047, f3(fy) * 1.0, f3(fz) * 1.08883]

  // XYZ -> RGB
  const rLinear = x * 3.2404542 + y * -1.5371385 + z * -0.4985314
  const gLinear = x * -0.969266 + y * 1.8760108 + z * 0.041556
  const bLinear = x * 0.0556434 + y * -0.2040259 + z * 1.0572252

  return [rLinear, gLinear, bLinear].map(toSrgb).map((c) => clamp(Math.round(c * 255), 0, 255)) as [number, number, number]
}

const getContrastRatio = (rgb1: [number, number, number], rgb2: [number, number, number]) => {
  const getLum = ([r, g, b]: [number, number, number]) => {
    const normalize = (value: number) => {
      const c = value / 255
      return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
    }
    return 0.2126 * normalize(r) + 0.7152 * normalize(g) + 0.0722 * normalize(b)
  }
  const lum1 = getLum(rgb1)
  const lum2 = getLum(rgb2)
  const lighter = Math.max(lum1, lum2)
  const darker = Math.min(lum1, lum2)
  return (lighter + 0.05) / (darker + 0.05)
}

const generateSemanticColors = (lab: LabColor, isDark: boolean) => {
  const formatLab = (l: LabColor) => `lab(${Math.round(l.l)}% ${Math.round(l.a)} ${Math.round(l.b)})`

  // Get accessible text color
  const bgRgb = labToRgb(lab)
  const whiteContrast = getContrastRatio(bgRgb, [255, 255, 255])
  const blackContrast = getContrastRatio(bgRgb, [0, 0, 0])

  let textL: number
  if (isDark) {
    if (whiteContrast >= 4.5) textL = 95
    else if (blackContrast >= 4.5) textL = 10
    else textL = whiteContrast > blackContrast ? 90 : 15
  } else {
    if (blackContrast >= 4.5) textL = 15
    else if (whiteContrast >= 4.5) textL = 90
    else textL = blackContrast > whiteContrast ? 20 : 85
  }

  const textLab = { l: textL, a: 0, b: 0 }

  return {
    primary: formatLab(lab),
    secondary: formatLab({ l: Math.max(10, lab.l - 20), a: lab.a * 0.7, b: lab.b * 0.7 }),
    background: formatLab({ l: isDark ? 8 : 98, a: -lab.a * 0.15, b: -lab.b * 0.15 }), // Complementary
    text: formatLab(textLab),
    accent: formatLab({
      l: isDark ? Math.min(85, textL + 20) : Math.max(15, textL - 25),
      a: textLab.a * (isDark ? 1.8 : 1.4),
      b: textLab.b * (isDark ? 1.8 : 1.4)
    }),
    neutral: formatLab({
      l: isDark ? Math.max(20, textL - 50) : Math.min(80, textL + 40),
      a: textLab.a * 0.3,
      b: textLab.b * 0.3
    }),
    border: formatLab({ l: isDark ? 30 : 85, a: lab.a * 0.3, b: lab.b * 0.3 }),
    cardBackground: formatLab({ l: isDark ? 12 : 95, a: lab.a * 0.05, b: lab.b * 0.05 })
  }
}

const applyTheme = (timeOfDay: string, progress: number) => {
  const html = document.documentElement
  const isDark = DARK_TIME_PERIODS.includes(timeOfDay as (typeof DARK_TIME_PERIODS)[number])

  // Update DOM classes
  isDark ? html.classList.add('dark') : html.classList.remove('dark')
  TIME_OF_DAY_VALUES.forEach((cls) => cls !== timeOfDay && html.classList.remove(cls))
  html.classList.add(timeOfDay)

  // Calculate time-of-day color
  const rgbColor = BASE_RGB_COLORS[timeOfDay as keyof typeof BASE_RGB_COLORS]
  if (!rgbColor) return

  const baseLab = rgbToLab(rgbColor[0], rgbColor[1], rgbColor[2])
  const intensity = progress / 90
  const adjustedLab: LabColor = {
    l: clamp(baseLab.l + (intensity * 15 - 7.5), 5, 95),
    a: clamp(baseLab.a + (intensity * 20 - 10), -100, 100),
    b: clamp(baseLab.b + (intensity * 20 - 10), -100, 100)
  }

  // Generate and apply semantic colors
  const colors = generateSemanticColors(adjustedLab, isDark)
  const cssVars = {
    '--color-primary': colors.primary,
    '--color-secondary': colors.secondary,
    '--color-background': colors.background,
    '--color-text': colors.text,
    '--color-accent': colors.accent,
    '--color-neutral': colors.neutral,
    '--title-color': colors.text,
    '--border-color': colors.border,
    '--card-background-color': colors.cardBackground
  }

  Object.entries(cssVars).forEach(([key, value]) => html.style.setProperty(key, value))
}

const ColorsContext = createContext<ColorsContextType | undefined>(undefined)

export const useColors = (): ColorsContextType => {
  const ctx = useContext(ColorsContext)
  if (!ctx) throw new Error('useColors must be used within ColorsProvider')
  return ctx
}

export const ColorsProvider = ({ children }: { children: React.ReactNode }) => {
  const sunDialData = useSunDial()
  const [manualTimeOfDay, setManualTimeOfDay] = useState<string | null>(null)

  const timeOfDay = manualTimeOfDay || sunDialData.timeOfDay
  const progress = sunDialData.progress

  useEffect(() => {
    applyTheme(timeOfDay, progress)
  }, [timeOfDay, progress])

  const toggleTimeOfDay = () => {
    const currentIndex = TIME_OF_DAY_VALUES.indexOf(timeOfDay as (typeof TIME_OF_DAY_VALUES)[number])
    const nextIndex = (currentIndex + 1) % TIME_OF_DAY_VALUES.length
    setManualTimeOfDay(TIME_OF_DAY_VALUES[nextIndex])
  }

  return (
    <ColorsContext.Provider
      value={{
        toggleTimeOfDay,
        isDark: DARK_TIME_PERIODS.includes(timeOfDay as (typeof DARK_TIME_PERIODS)[number])
      }}>
      {children}
    </ColorsContext.Provider>
  )
}

export default useColors
