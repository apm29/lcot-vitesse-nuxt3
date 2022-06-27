import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import es from '@/locales/es.json'
import fr from '@/locales/fr.json'
import zh from '@/locales/zh.json'

const message = {
  en,
  es,
  fr,
  zh,
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  warnHtmlMessage: false,
  messages: message,
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n)
})
