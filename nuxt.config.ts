import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  unocss: {
    preflight: true,
  },

})
