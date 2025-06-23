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

export type LabColor = { l: number; a: number; b: number }

// Color space conversion utilities
export const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))
export const toLinear = (c: number) => (c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92)
export const toSrgb = (c: number) => (c > 0.0031308 ? 1.055 * c ** (1 / 2.4) - 0.055 : 12.92 * c)

export const rgbToLab = (r: number, g: number, b: number): LabColor => {
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
  secondary: string
  background: string
  content: string
  accent: string
  neutral: string
  title: string
  border: string
  cardBackground: string
  rgb: {
    primary: string
    secondary: string
    background: string
    content: string
    accent: string
    neutral: string
    title: string
    border: string
    cardBackground: string
  }
}

export const initialBlack = (): Colors => {
  return {
    primary: '#000000',
    secondary: '#000000',
    background: '#000000',
    content: '#000000',
    accent: '#000000',
    neutral: '#000000',
    title: '#000000',
    border: '#000000',
    cardBackground: '#000000',
    rgb: {
      primary: '#000000',
      secondary: '#000000',
      background: '#000000',
      content: '#000000',
      accent: '#000000',
      neutral: '#000000',
      title: '#000000',
      border: '#000000',
      cardBackground: '#000000'
    }
  }
}

export const generateSemanticColors = (rgbColor: readonly [number, number, number], progress: number, isDark: boolean): Colors => {
  const baseLab = rgbToLab(rgbColor[0], rgbColor[1], rgbColor[2])
  const intensity = progress / 90
  const primary: LabColor = {
    l: clamp(baseLab.l + (intensity * 15 - 7.5), 5, 95),
    a: clamp(baseLab.a + (intensity * 20 - 10), -100, 100),
    b: clamp(baseLab.b + (intensity * 20 - 10), -100, 100)
  }

  const formatLab = (l: LabColor) => `lab(${Math.round(l.l)}% ${Math.round(l.a)} ${Math.round(l.b)})`

  const formatRgb = (rgb: [number, number, number]) => `rgb(${Math.round(rgb[0])}, ${Math.round(rgb[1])}, ${Math.round(rgb[2])})`

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

  const secondary = { l: Math.max(10, primary.l - 20), a: primary.a * 0.7, b: primary.b * 0.7 }
  const background = { l: isDark ? 8 : 98, a: -primary.a * 0.15, b: -primary.b * 0.15 }
  const content = { l: textL, a: 0, b: 0 }
  const accent = {
    l: isDark ? Math.min(85, textL + 20) : Math.max(15, textL - 25),
    a: content.a * (isDark ? 1.8 : 1.4),
    b: content.b * (isDark ? 1.8 : 1.4)
  }
  const neutral = {
    l: isDark ? Math.max(20, textL - 50) : Math.min(80, textL + 40),
    a: content.a * 0.3,
    b: content.b * 0.3
  }

  const border = { l: isDark ? 30 : 85, a: primary.a * 0.3, b: primary.b * 0.3 }

  const cardBackground = { l: isDark ? 12 : 95, a: primary.a * 0.05, b: primary.b * 0.05 }

  return {
    primary: formatLab(primary),
    secondary: formatLab(secondary),
    background: formatLab(background),
    content: formatLab(content),
    title: formatLab(content),
    accent: formatLab(accent),
    neutral: formatLab(neutral),
    border: formatLab(border),
    cardBackground: formatLab(cardBackground),

    rgb: {
      primary: formatRgb(labToRgb(primary)),
      secondary: formatRgb(labToRgb(secondary)),
      background: formatRgb(labToRgb(background)),
      content: formatRgb(labToRgb(content)),
      title: formatRgb(labToRgb(content)),
      accent: formatRgb(labToRgb(accent)),
      neutral: formatRgb(labToRgb(neutral)),
      border: formatRgb(labToRgb(border)),
      cardBackground: formatRgb(labToRgb(cardBackground))
    }
  }
}

export default generateSemanticColors
