// vite.config.server.ts
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    ssr: true,
    outDir: 'dist/server',
    target: 'node18',
    rollupOptions: {
      input: path.resolve(__dirname, 'server/index.ts'),
    },
    emptyOutDir: true,
  },
})
