import 'jiti'

import { spawn } from 'node:child_process'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// Plugin to run SSG after build
const ssgPlugin = (): Plugin => {
  return {
    name: 'ssg',
    apply: 'build',
    async closeBundle() {
      console.log('🚀 Running SSG...')

      return new Promise((resolve, reject) => {
        const child = spawn('tsx', ['SSG.tsx'], {
          stdio: 'inherit',
          cwd: process.cwd()
        })

        child.on('close', (code) => {
          if (code === 0) {
            console.log('✅ SSG completed successfully')
            resolve()
          } else {
            console.error(`❌ SSG failed with code ${code}`)
            reject(new Error(`SSG process exited with code ${code}`))
          }
        })

        child.on('error', (error) => {
          console.error('❌ Failed to start SSG:', error)
          reject(error)
        })
      })
    }
  }
}

export default defineConfig({
  plugins: [tsconfigPaths(), tanstackRouter({ target: 'react', autoCodeSplitting: true }), viteReact(), tailwindcss(), ssgPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          'three-core': ['three'],
          'three-fiber': ['@react-three/fiber'],
          'three-drei': ['@react-three/drei'],
          'three-postprocessing': ['@react-three/postprocessing']
        }
      },
      treeshake: {
        preset: 'recommended'
      }
    }
  },
  optimizeDeps: {
    include: ['three', 'react', 'react-dom', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing']
  }
})
