import { projects } from 'vitest/config'

export default defineWorkspace([
  '/*',
  {
    extends: './vitest.config.js',
    test: {
      include: ['test/**/*Test.ts', 'test/**/*Test.tsx'],
      name: 'func',
      environment: 'node'
    }
  },
  {
    extends: './vitest.config.js',
    test: {
      include: ['test/**/*Test.wdio.ts', 'test/**/*Test.wdio.tsx'],
      name: 'e2e',
      environment: 'node'
    }
  }
])
