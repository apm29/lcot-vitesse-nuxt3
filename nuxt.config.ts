import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@inkline/nuxt',
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css',
  ],
  experimental: {
    reactivityTransform: true,
    // viteNode: true,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  inkline: {
    colorMode: 'light',
    locale: 'zhCN',
  },
  vite: {
    server: {
      proxy: {
        '/java': {
          target: 'http://lcot-hangzhou.com',
          changeOrigin: true,
        },
      },
    },
  },
})
