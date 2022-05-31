import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@inkline/nuxt',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: true,
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
})
