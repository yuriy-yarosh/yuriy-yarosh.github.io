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

import { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef, type ReactNode } from 'react'
import * as THREE from 'three'

// Define the context type
interface AnimationContextType {
  isAnimating: boolean
  pauseAnimation: () => void
  resumeAnimation: () => void
  animationClock: THREE.Clock
  continuousClock: THREE.Clock // Added continuous clock
}

const AnimationContext = createContext<AnimationContextType>({
  isAnimating: true,
  pauseAnimation: () => {
    console.warn('AnimationProvider not found')
  },
  resumeAnimation: () => {
    console.warn('AnimationProvider not found')
  },
  animationClock: new THREE.Clock(),
  continuousClock: new THREE.Clock(true) // Added continuous clock, auto-starts
})

export const useAnimationState = () => useContext(AnimationContext)

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [animationClock] = useState(() => new THREE.Clock(false))
  const [continuousClock] = useState(() => new THREE.Clock(true))

  const [manualOverride, setManualOverride] = useState<boolean | null>(null)
  const prevPathnameRef = useRef<string>(typeof window !== 'undefined' ? window.location.pathname : '/')

  // Determine if animation should be running based on path and manual override
  const shouldAnimateBasedOnPath = useMemo(() => {
    if (typeof window === 'undefined') return true
    const path = window.location.pathname
    return path === '/' || path === ''
  }, [])

  const isAnimating = useMemo(() => {
    if (manualOverride !== null) {
      return manualOverride
    }
    return shouldAnimateBasedOnPath
  }, [manualOverride, shouldAnimateBasedOnPath])

  // Handle pathname changes to reset manual override
  useEffect(() => {
    if (typeof window === 'undefined') return

    const currentPathname = window.location.pathname
    if (currentPathname !== prevPathnameRef.current) {
      setManualOverride(null)
      prevPathnameRef.current = currentPathname
    }
  }, []) // This effect needs to run on every render to detect pathname changes

  // Manage animation clock based on isAnimating state
  useEffect(() => {
    if (isAnimating) {
      if (!animationClock.running) {
        // To resume: adjust oldTime to account for elapsed time before pause, then set running to true.
        // This ensures getElapsedTime() continues from where it left off.
        animationClock.oldTime = (performance || Date).now()
        animationClock.running = true
      }
    } else {
      if (animationClock.running) {
        animationClock.stop() // stop() correctly updates elapsedTime and sets running to false
      }
    }
  }, [isAnimating, animationClock])

  const pauseAnimation = useCallback(() => {
    setManualOverride(false)
  }, [])

  const resumeAnimation = useCallback(() => {
    setManualOverride(true)
  }, [])

  const contextValue = useMemo(
    () => ({
      isAnimating,
      pauseAnimation,
      resumeAnimation,
      animationClock,
      continuousClock
    }),
    [isAnimating, pauseAnimation, resumeAnimation, animationClock, continuousClock]
  )

  return <AnimationContext.Provider value={contextValue}>{children}</AnimationContext.Provider>
}

export default useAnimationState
