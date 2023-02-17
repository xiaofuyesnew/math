
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
      resolvers: [],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    mkcert()
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(process.cwd(), 'src')
      }
    ]
  },
  server: {
    https: true,
  }
})
