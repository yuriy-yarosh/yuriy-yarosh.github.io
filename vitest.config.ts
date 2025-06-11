
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      reporter: ['text', 'lcov'],
      provider: 'v8'
    },
    testTimeout: 60000
  }
})
