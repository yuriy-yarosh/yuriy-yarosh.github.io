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

import { useState, useEffect } from 'react'
import { useColors } from 'Landing/Hooks'
import type { TimeOfDay as TimeOfDayType } from 'Landing/Hooks'
import { TimeOfDayIcons } from 'Landing/Components'

// Animation configuration
const PHASE_TIMINGS = {
  exiting: 100,
  blank: 50,
  entering: 100
} as const

type AnimationPhase = 'idle' | 'exiting' | 'blank' | 'entering'

export const TimeOfDay = ({ className }: { className?: string }) => {
  const { timeOfDay, toggleTimeOfDay } = useColors()
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('idle')
  const [nextTimeOfDay, setNextTimeOfDay] = useState<TimeOfDayType | null>(null)

  const getNextTimeOfDay = (current: TimeOfDayType): TimeOfDayType => {
    const timeOfDayOrder = ['night', 'dawn', 'morning', 'noon', 'afternoon', 'evening', 'dusk'] as const
    const currentIndex = timeOfDayOrder.indexOf(current as (typeof timeOfDayOrder)[number])
    return timeOfDayOrder[(currentIndex + 1) % timeOfDayOrder.length] as TimeOfDayType
  }

  const handleToggle = () => {
    if (animationPhase !== 'idle') return

    const next = getNextTimeOfDay(timeOfDay)
    setNextTimeOfDay(next)
    setAnimationPhase('exiting')
  }

  // Animation phase progression
  useEffect(() => {
    if (animationPhase === 'idle') return

    const timer = setTimeout(
      () => {
        switch (animationPhase) {
          case 'exiting':
            setAnimationPhase('blank')
            break
          case 'blank':
            toggleTimeOfDay()
            setAnimationPhase('entering')
            break
          case 'entering':
            // Complete animation
            setNextTimeOfDay(null)
            setAnimationPhase('idle')
            break
        }
      },
      PHASE_TIMINGS[animationPhase as keyof typeof PHASE_TIMINGS]
    )

    return () => clearTimeout(timer)
  }, [animationPhase, toggleTimeOfDay])

  return (
    <button
      type='button'
      onClick={handleToggle}
      disabled={animationPhase !== 'idle'}
      className={`group relative h-5 w-5 cursor-pointer hover:text-accent hover:drop-shadow-[0_1px_2px_var(--color-accent)] ${className}`}
      aria-label='Click to cycle to next time of day color theme.'
      title='Toggle time of day color theme'>
      {(animationPhase === 'idle' || animationPhase === 'exiting') && (
        <div className={`transform-all absolute inset-0 transition duration-100 ${animationPhase === 'exiting' ? '-translate-x-full opacity-0' : 'opacity-100'}`}>
          {TimeOfDayIcons[timeOfDay]}
        </div>
      )}

      {(animationPhase === 'blank' || animationPhase === 'entering') && nextTimeOfDay && (
        <div className={`transform-all absolute inset-0 transition duration-100 ${animationPhase === 'entering' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          {TimeOfDayIcons[nextTimeOfDay]}
        </div>
      )}
    </button>
  )
}

export default TimeOfDay
