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
import { generateSemanticColors, type Colors, initialBlack } from './semanticColors'

type ColorsContextType = {
  isDark: boolean
  colors: Colors
  timeOfDay: TimeOfDay
  toggleTimeOfDay: () => void
}

const DARK_TIME_PERIODS = ['evening', 'dusk', 'night', 'dawn'] as const
const TIME_OF_DAY_VALUES = ['night', 'dawn', 'morning', 'noon', 'afternoon', 'evening', 'dusk'] as TimeOfDay[]

export const BASE_RGB_COLORS = {
  night: [25, 25, 112],
  dawn: [255, 94, 77],
  morning: [255, 215, 0],
  noon: [135, 206, 235],
  afternoon: [255, 235, 59],
  evening: [255, 165, 0],
  dusk: [75, 0, 130]
} as const

const applyTheme = (timeOfDay: string, progress: number) => {
  const html = document.documentElement
  const isDark = DARK_TIME_PERIODS.includes(timeOfDay as (typeof DARK_TIME_PERIODS)[number])

  // Update DOM classes
  isDark ? html.classList.add('dark') : html.classList.remove('dark')
  TIME_OF_DAY_VALUES.forEach((cls) => cls !== timeOfDay && html.classList.remove(cls))
  html.classList.add(timeOfDay)

  // Calculate time-of-day color
  const rgbColor = BASE_RGB_COLORS[timeOfDay as keyof typeof BASE_RGB_COLORS]
  if (!rgbColor) {
    throw new Error(`Invalid time of day: ${timeOfDay}`)
  }

  // Generate and apply semantic colors
  const colors = generateSemanticColors(rgbColor, progress, isDark)
  const cssVars = {
    '--color-primary': colors.primary,
    '--color-secondary': colors.secondary,
    '--color-background': colors.background,
    '--color-content': colors.content,
    '--color-accent': colors.accent,
    '--color-neutral': colors.neutral,
    '--color-title': colors.title,
    '--color-border': colors.border,
    '--color-card-background': colors.cardBackground
  }

  Object.entries(cssVars).forEach(([key, value]) => html.style.setProperty(key, value))
  
  return colors
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

  const [colors, setColors] = useState(initialBlack())

  const timeOfDay = manualTimeOfDay || sunDialData.timeOfDay
  const progress = sunDialData.progress

  useEffect(() => {
    const colors = applyTheme(timeOfDay, progress)
    setColors(colors)
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
        colors,
        timeOfDay: timeOfDay as TimeOfDay,
        isDark: DARK_TIME_PERIODS.includes(timeOfDay as (typeof DARK_TIME_PERIODS)[number])
      }}>
      {children}
    </ColorsContext.Provider>
  )
}

export default useColors
