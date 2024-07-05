/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import biomePlugin from 'vite-plugin-biome'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), biomePlugin()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    // 注意 replacement にはプロジェクトルートからの絶対パスを指定する必要がある
    alias: [{ find: '@', replacement: '/' }]
  },
})
