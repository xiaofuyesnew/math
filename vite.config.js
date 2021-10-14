import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
  },
  plugins: [vue()],
})
