import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './',
  assetsInclude: ['**/*.mp4'],
  server: {
    port: process.env.DEPLOY_RUN_PORT ? Number(process.env.DEPLOY_RUN_PORT) : 5173,
    host: '0.0.0.0'
  },
  preview: {
    port: process.env.DEPLOY_RUN_PORT ? Number(process.env.DEPLOY_RUN_PORT) : 4173,
    host: '0.0.0.0'
  }
})
