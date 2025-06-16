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

// Define BoxData interface
// Custom hook to determine gridSize based on screen width
export const useResponsiveGridSize = (mdBreakpoint = 768, xlBreakpoint = 1280, sizeSmall = 8, sizeMedium = 10, sizeLarge = 12): number => {
  const [gridSize, setGridSize] = useState(() => {
    const width = window.innerWidth
    if (width >= xlBreakpoint) return sizeLarge
    if (width >= mdBreakpoint) return sizeMedium
    return sizeSmall
  })

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= xlBreakpoint) {
        setGridSize(sizeLarge)
      } else if (width >= mdBreakpoint) {
        setGridSize(sizeMedium)
      } else {
        setGridSize(sizeSmall)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial call

    return () => window.removeEventListener('resize', handleResize)
  }, [mdBreakpoint, xlBreakpoint, sizeSmall, sizeMedium, sizeLarge])

  return gridSize
}

export default useResponsiveGridSize
