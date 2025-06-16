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

import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { DarkModeProvider } from './hooks/useDarkMode'
import { AnimationProvider } from './hooks/useAnimationState'

import { routeTree } from './routeTree.gen'
import { Scene } from './components/canvas/Scene'


const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <AnimationProvider>
        <DarkModeProvider>
          <div className='absolute inset-0 z-0 h-screen w-full overflow-hidden'>
            <Scene />
          </div>

          <RouterProvider router={router} />
        </DarkModeProvider>
      </AnimationProvider>
    </StrictMode>
  )
}
