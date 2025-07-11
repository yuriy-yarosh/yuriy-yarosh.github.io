#!/usr/bin/env tsx

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

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createRouter as createTanstackRouter } from '@tanstack/react-router'
import { createRequestHandler, RouterServer, renderRouterToString } from '@tanstack/react-router/ssr/server'
import { StrictMode, useEffect, useState } from 'react'
import { Scene } from './src/Components'
import { AnimationProvider, ColorsProvider } from './src/Hooks'
import { routeTree } from './src/routeTree.gen'
import { getTitleFor } from './src/Titles'

export function createRouter() {
  return createTanstackRouter({ routeTree })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}

const render = ({ request }: { request: Request }) =>
  createRequestHandler({ request, createRouter })(({ responseHeaders, router }) => {
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

              <RouterServer router={router} />
            </ColorsProvider>
          </AnimationProvider>
        </StrictMode>
      )
    }

    return renderRouterToString({
      responseHeaders,
      router,
      children: <App />
    })
  })

interface RouteConfig {
  type: 'root' | 'route' | 'index'
  file: string
  path?: string
  children?: RouteConfig[]
}

interface TSRouterConfig {
  routesDirectory: string
  virtualRouteConfig: RouteConfig
}

interface SSGOptions {
  configPath: string
  outputDir: string
  excludePaths?: string[]
  includePaths?: string[]
}

// Pure function to get current path based on route config
const getCurrentPath = (config: RouteConfig, basePath: string): string | null => {
  switch (config.type) {
    case 'root':
      return '/'
    case 'route':
      return config.path?.startsWith('/') ? config.path : `${basePath}/${config.path}`
    case 'index':
      return basePath || '/'
    default:
      return null
  }
}

// Functional route path extraction using flatMap
const extractRoutePaths = (config: RouteConfig, basePath = ''): string[] => {
  const currentPath = getCurrentPath(config, basePath)
  const currentPaths = currentPath ? [currentPath] : []
  const childPaths =
    config.children?.flatMap((child) =>
      extractRoutePaths(child, config.type === 'route' && config.path ? (config.path.startsWith('/') ? config.path : `${basePath}/${config.path}`) : basePath)
    ) ?? []

  return [...currentPaths, ...childPaths]
}

// Pure function to read and parse TSR config
const readTSRConfig = (configPath: string): TSRouterConfig => {
  const configFullPath = resolve(configPath)
  if (!existsSync(configFullPath)) {
    throw new Error(`TanStack Router config not found at ${configFullPath}`)
  }

  const configContent = readFileSync(configFullPath, 'utf-8')
  return JSON.parse(configContent)
}

// Function to generate a single HTML file
const writeHtmlFile = async (path: string, indexHtml: string, htmlContent: string, distPath: string): Promise<void> => {
  const html = indexHtml.replace(/<title>.*<\/title>/g, `<title>${getTitleFor(path)}</title>`).replace(/<div id="app">.*<\/div>/g, `<div id="app">${htmlContent}</div>`)

  const outputPath = path === '/' ? join(distPath, 'index.html') : join(distPath, path, 'index.html')

  if (!existsSync(dirname(outputPath))) {
    mkdirSync(dirname(outputPath), { recursive: true })
  }

  writeFileSync(outputPath, html, 'utf-8')
}

// Main SSG function using functional composition
const generateSSG = async (options: SSGOptions): Promise<void> => {
  const { configPath, outputDir } = options

  const normalizeAndDeduplicatePaths = (paths: string[]): string[] => [...new Set(paths.map((p) => p.replace(/\/+/g, '/').replace(/\/$/, '') || '/'))].sort()

  const tsrConfig = readTSRConfig(configPath)
  const paths = normalizeAndDeduplicatePaths(extractRoutePaths(tsrConfig.virtualRouteConfig))

  const distPath = resolve(outputDir)
  const indexHtml = readFileSync(join(distPath, 'index.html'), 'utf-8')

  const results = await Promise.allSettled(
    paths.map(async (p) => {
      const resp = await render({ request: new Request(`http://localhost/${p}`) })
      const htmlContent = (await resp.text()).replace(`<!DOCTYPE html>`, '')
      writeHtmlFile(p, indexHtml, htmlContent, distPath)
    })
  )

  results.forEach((result, index) => {
    if (result.status === 'rejected') {
      const path = paths[index]
      console.error(`❌ ${path}:`, result.reason instanceof Error ? result.reason.message : String(result.reason))
    }
  })
}

try {
  await generateSSG({
    configPath: 'tsr.config.json',
    outputDir: 'dist'
  })
  process.exit(0)
} catch (error) {
  console.error('SSG CLI failed:', error)
  process.exit(1)
}
