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

import { usePathname } from 'Landing/Hooks'
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

enum ScenePage {
  Home = 1,
  About = 2,
  Blog = 3,
  Contacts = 4,
  Events = 5,
  Hire = 6,
  Legal = 7,
  Projects = 8
}

interface AnimationContextType {
  isAnimating: boolean
  currentScene: ScenePage
  pauseAnimation: () => void
  resumeAnimation: () => void
  animationClock: THREE.Clock
  continuousClock: THREE.Clock
}

const SCENE_MAP: Record<string, ScenePage> = {
  '/': ScenePage.Home,
  '/about': ScenePage.About,
  '/blog': ScenePage.Blog,
  '/contacts': ScenePage.Contacts,
  '/events': ScenePage.Events,
  '/hire': ScenePage.Hire,
  '/legal': ScenePage.Legal,
  '/projects': ScenePage.Projects
}

const AnimationContext = createContext<AnimationContextType>({
  isAnimating: true,
  currentScene: ScenePage.Home,
  pauseAnimation: () => console.warn('AnimationProvider not found'),
  resumeAnimation: () => console.warn('AnimationProvider not found'),
  animationClock: new THREE.Clock(false),
  continuousClock: new THREE.Clock(false)
})

export const useAnimationState = () => useContext(AnimationContext)

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const [manualOverride, setManualOverride] = useState<boolean | null>(null)
  const prevPathnameRef = useRef(pathname)

  const [clocks] = useState(() => {
    const isSSR = typeof window === 'undefined'
    return {
      animation: new THREE.Clock(false), // Always start paused
      continuous: new THREE.Clock(!isSSR) // Paused during SSR, auto-start on client
    }
  })

  // Start continuous clock on client-side after hydration
  useEffect(() => {
    const { continuous } = clocks
    if (typeof window !== 'undefined' && !continuous.running) {
      continuous.oldTime = performance.now()
      continuous.running = true
    }
  }, [clocks])

  // Reset manual override on route change
  useEffect(() => {
    if (pathname !== prevPathnameRef.current) {
      setManualOverride(null)
      prevPathnameRef.current = pathname
    }
  }, [pathname])

  // Calculate current state
  const currentScene = SCENE_MAP[pathname] || ScenePage.Home
  const shouldAnimate = pathname === '/'
  const isAnimating = manualOverride ?? shouldAnimate

  // Manage animation clock
  useEffect(() => {
    const { animation } = clocks

    if (isAnimating && !animation.running) {
      animation.oldTime = performance.now()
      animation.running = true
    } else if (!isAnimating && animation.running) {
      animation.stop()
    }
  }, [isAnimating, clocks])

  const pauseAnimation = useCallback(() => setManualOverride(false), [])
  const resumeAnimation = useCallback(() => setManualOverride(true), [])

  const value = useMemo(
    () => ({
      isAnimating,
      currentScene,
      pauseAnimation,
      resumeAnimation,
      animationClock: clocks.animation,
      continuousClock: clocks.continuous
    }),
    [isAnimating, currentScene, pauseAnimation, resumeAnimation, clocks]
  )

  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>
}

export default useAnimationState
