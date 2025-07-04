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

import { Scene } from 'Landing/Components'
import { AnimationProvider, ColorsProvider } from 'Landing/Hooks'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <StrictMode>
      <AnimationProvider>
        <ColorsProvider>
          <div className='fixed inset-0 z-0 h-screen w-screen'>{isClient && <Scene />}</div>

          <RouterProvider router={router} />
        </ColorsProvider>
      </AnimationProvider>
    </StrictMode>
  )
}

// biome-ignore lint/style/noNonNullAssertion: doesn't really matter
const rootElement = document.getElementById('app')!

if (rootElement.hasChildNodes()) {
  try {
    ReactDOM.hydrateRoot(rootElement, <App />)
  } catch (err) {
    console.warn("There's a known var font STAT table issue: https://github.com/google/fonts/issues/2391")
    console.warn("There's a drei react regression, so we're currently skipping hydration")
    console.warn('Hydration error:', err)
  }
} else {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
