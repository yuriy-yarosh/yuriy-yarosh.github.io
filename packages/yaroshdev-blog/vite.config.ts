import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        }
      },
      treeshake: {
        preset: 'recommended'
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
