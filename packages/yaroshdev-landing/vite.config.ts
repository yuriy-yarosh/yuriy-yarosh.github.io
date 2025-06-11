import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import tsconfigPaths from 'vite-tsconfig-paths'

import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    {
      enforce: 'pre',
      ...mdx({
        /* jsxImportSource: …, otherOptions… */
      })
    },
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    viteReact(),
    tailwindcss()
  ]
})
