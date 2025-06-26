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

import { ContentCard, ContentLink, Heading, Paragraph } from 'Landing/Components'
import { createFileRoute } from '@tanstack/react-router'


export const FrontendLink = (params: { to: string; external?: boolean; className?: string; children: React.ReactNode }) => ContentLink({ ...params, from: '/hire/frontend' })

export const HireFrontend = () => {
  return (
    <ContentCard catchBoundary='frontend' to='/hire' from='/hire/frontend'>
      <div className='space-y-2 px-4 md:px-12'>
        <Heading>Frontend</Heading>
        <Paragraph className='mt-4 lg:mt-8'>
          Professional frontend development delivering modern and responsive user interfaces. Built with component-driven development approach, cutting-edge frameworks and tools to
          create engaging user experiences with performance, accessibility, and maintainability in mind.
        </Paragraph>

        <div className='mt-4 space-y-4 lg:mt-8'>
          <div>
            <Paragraph className='font-semibold text-lg'>Core Technologies</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                ⚛️ <strong>React</strong> with{' '}
                <FrontendLink to='https://react.dev/' external>
                  React 18+
                </FrontendLink>{' '}
                including Hooks, Context, and Suspense for modern component architecture
              </li>
              <li>
                🎨 <strong>TailwindCSS</strong> with{' '}
                <FrontendLink to='https://tailwindcss.com/' external>
                  Tailwind
                </FrontendLink>{' '}
                for utility-first styling and responsive design
              </li>
              <li>
                🔗 <strong>tRPC</strong> with{' '}
                <FrontendLink to='https://trpc.io/' external>
                  tRPC
                </FrontendLink>{' '}
                for end-to-end typesafe APIs and seamless client-server communication
              </li>
              <li>
                📚 <strong>TanStack</strong> ecosystem including{' '}
                <FrontendLink to='https://tanstack.com/router' external>
                  Router
                </FrontendLink>
                ,{' '}
                <FrontendLink to='https://tanstack.com/query' external>
                  Query
                </FrontendLink>
                , and{' '}
                <FrontendLink to='https://tanstack.com/table' external>
                  Table
                </FrontendLink>{' '}
                for robust state management and data handling
              </li>
            </ul>
            <Paragraph className='mt-2 text-sm'>
              Well versed in{' '}
              <FrontendLink to='https://angular.dev/' external>
                Angular
              </FrontendLink>
              ,{' '}
              <FrontendLink to='https://vuejs.org/' external>
                Vue
              </FrontendLink>
              ,{' '}
              <FrontendLink to='https://svelte.dev/' external>
                Svelte
              </FrontendLink>
              ,{' '}
              <FrontendLink to='https://astro.build/' external>
                Astro
              </FrontendLink>{' '}
              and other frameworks, but prefer React for its ecosystem and flexibility.
            </Paragraph>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Development Practices</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>
                📖 Component-driven development with{' '}
                <FrontendLink to='https://storybook.js.org/' external>
                  Storybook.js
                </FrontendLink>{' '}
                for isolated component development and documentation
              </li>
              <li>
                🧪 Test-driven development using{' '}
                <FrontendLink to='https://vitest.dev/' external>
                  Vitest
                </FrontendLink>{' '}
                for reliable functional testing
              </li>
              <li>
                🎯 End-to-end testing with{' '}
                <FrontendLink to='https://playwright.dev/' external>
                  Playwright
                </FrontendLink>{' '}
                and{' '}
                <FrontendLink to='https://webdriver.io/' external>
                  WDIO
                </FrontendLink>{' '}
                for comprehensive cross-platform E2E testing in{' '}
                <FrontendLink to='https://aws.amazon.com/device-farm/' external>
                  AWS Device Farm
                </FrontendLink>
              </li>
              <li>
                🔧 Modern build tools including{' '}
                <FrontendLink to='https://vitejs.dev/' external>
                  Vite
                </FrontendLink>
                ,{' '}
                <FrontendLink to='https://turbo.build/' external>
                  Turbo
                </FrontendLink>{' '}
                for optimized development and production builds
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Performance & Optimization</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>⚡ Code splitting and lazy loading for optimal bundle sizes and loading performance</li>
              <li>🎨 CSS-in-JS solutions and utility-first approaches for maintainable styling</li>
              <li>📱 Progressive Web App (PWA) development with service workers and offline capabilities</li>
              <li>
                🔍 Performance monitoring and optimization using{' '}
                <FrontendLink to='https://web.dev/vitals/' external>
                  Core Web Vitals
                </FrontendLink>{' '}
                metrics
              </li>
            </ul>
          </div>

          <div>
            <Paragraph className='font-semibold text-lg'>Architecture & Patterns</Paragraph>
            <ul className='m-2 space-y-2 text-sm md:m-4 md:text-base'>
              <li>🏗️ Micro-frontend architecture for scalable and maintainable large applications</li>
              <li>🔄 State management patterns using Context API, Zustand, or Redux Toolkit</li>
              <li>📡 Real-time features with WebSockets and Server-Sent Events integration</li>
              <li>🎭 Design system implementation and component library development</li>
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}

export const Route = createFileRoute('/hire/frontend')({
  component: HireFrontend
})
