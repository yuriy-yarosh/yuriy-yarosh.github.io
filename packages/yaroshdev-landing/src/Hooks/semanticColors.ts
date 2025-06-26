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

export type LabColor = { l: number; a: number; b: number; alpha: number }

// Color space conversion utilities
export const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))
export const toLinear = (c: number) => (c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92)
export const toSrgb = (c: number) => (c > 0.0031308 ? 1.055 * c ** (1 / 2.4) - 0.055 : 12.92 * c)

export const rgbToLab = (r: number, g: number, b: number, alpha: number): LabColor => {
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
    b: Math.round(200 * (fy - fz)),
    alpha
  }
}

export const labToRgb = ({ l, a, b }: LabColor): [number, number, number] => {
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

export const getContrastRatio = (rgb1: [number, number, number], rgb2: [number, number, number]) => {
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

export type Colors = {
  primary: string
  accent: string
  secondaryAccent: string
  content: string
  neutral: string
  border: string
  cardBackground: string
  rgb: {
    primary: string
    accent: string
    secondaryAccent: string
    content: string
    neutral: string
    border: string
    cardBackground: string
  }
}

export const initialBlack = (): Colors => {
  return {
    primary: '#343434',
    accent: '#343434',
    secondaryAccent: '#343434',
    content: '#343434',
    neutral: '#343434',
    border: '#343434',
    cardBackground: '#343434',
    rgb: {
      primary: '#343434',
      secondaryAccent: '#343434',
      content: '#343434',
      accent: '#343434',
      neutral: '#343434',
      border: '#343434',
      cardBackground: '#343434'
    }
  }
}

export const isDarkLab = (labColor: LabColor): boolean => labColor.l < 50

export const isDarkRgb = (rgbColor: readonly [number, number, number]): boolean => {
  const [r, g, b] = rgbColor
  return r * 0.2126 + g * 0.7152 + b * 0.0722 < 128 // photometric contribution
}

export const generateSemanticColors = (rgbColor: readonly [number, number, number], nextRgbColor: readonly [number, number, number], progress: number): Colors => {
  const currentLab = rgbToLab(rgbColor[0], rgbColor[1], rgbColor[2], 1)
  const nextLab = rgbToLab(nextRgbColor[0], nextRgbColor[1], nextRgbColor[2], 1)

  // Calculate transition factor
  const transitionFactor = progress / 90 // 0 to 1

  // Base interpolated color
  const interpolatedLab: LabColor = {
    l: currentLab.l + (nextLab.l - currentLab.l) * transitionFactor,
    a: currentLab.a + (nextLab.a - currentLab.a) * transitionFactor,
    b: currentLab.b + (nextLab.b - currentLab.b) * transitionFactor,
    alpha: 1
  }

  // Use original RGB color for dark detection, not interpolated
  const isDark = isDarkRgb(rgbColor)

  // Adjust for dark vs light periods
  const primary: LabColor = {
    l: clamp(isDark ? interpolatedLab.l * 0.3 : Math.max(interpolatedLab.l, 75), 2, 95), // Much darker for night, bright for day
    a: clamp(interpolatedLab.a * (isDark ? 0.8 : 1), -100, 100),
    b: clamp(interpolatedLab.b * (isDark ? 0.8 : 1), -100, 100),
    alpha: 1
  }

  const formatLab = (l: LabColor) => `lab(${Math.round(l.l)}% ${Math.round(l.a)} ${Math.round(l.b)} / ${l.alpha})`

  const formatRgba = (rgb: readonly [number, number, number, number]) => `rgba(${Math.round(rgb[0])}, ${Math.round(rgb[1])}, ${Math.round(rgb[2])}, ${Math.round(rgb[3])})`

  // Get accessible text color
  const bgRgb = labToRgb(primary)
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

  // Calculate accent first
  const accent: LabColor = {
    l: isDark ? Math.min(85, textL + 20) : Math.max(15, textL - 25),
    a: primary.a * (isDark ? 0.8 : 0.4),
    b: primary.b * (isDark ? 0.8 : 0.4),
    alpha: 0.9
  }

  const secondaryAccent: LabColor = {
    l: isDark ? Math.min(85, accent.l - 30) : Math.max(15, accent.l + 25),
    a: accent.a,
    b: accent.b,
    alpha: 0.9
  }

  // Content as complementary to accent with proper contrast
  const content: LabColor = {
    l: isDark ? Math.min(85, textL + 10) : Math.max(15, textL - 25),
    a: -accent.a * 0.5, // Complementary (opposite)
    b: -accent.b * 0.5, // Complementary (opposite)
    alpha: 0.85
  }

  const neutral: LabColor = {
    l: content.l,
    a: (content.a + accent.a) / 2,
    b: (content.b + accent.b) / 2,
    alpha: 0.85
  }

  const border: LabColor = { l: isDark ? 30 : 85, a: primary.a * 0.3, b: primary.b * 0.3, alpha: 1 }

  const cardBackground: LabColor = { l: isDark ? 12 : 95, a: neutral.a * 0.05, b: neutral.b * 0.05, alpha: 0.2 }

  return {
    primary: formatLab(primary),
    secondaryAccent: formatLab(secondaryAccent),
    content: formatLab(content),
    accent: formatLab(accent),
    neutral: formatLab(neutral),
    border: formatLab(border),
    cardBackground: formatLab(cardBackground),

    rgb: {
      primary: formatRgba([...labToRgb(primary), primary.alpha * 100]),
      secondaryAccent: formatRgba([...labToRgb(secondaryAccent), secondaryAccent.alpha * 100]),
      content: formatRgba([...labToRgb(content), content.alpha * 100]),
      accent: formatRgba([...labToRgb(accent), accent.alpha * 100]),
      neutral: formatRgba([...labToRgb(neutral), neutral.alpha * 100]),
      border: formatRgba([...labToRgb(border), border.alpha * 100]),
      cardBackground: formatRgba([...labToRgb(cardBackground), cardBackground.alpha * 100])
    }
  }
}

export default generateSemanticColors
