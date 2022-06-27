<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const items = [
  {
    text: 'English',
    value: 'en',
  },
  {
    text: 'Español',
    value: 'es',
  },
  {
    text: 'Français',
    value: 'fr',
  },
  {
    text: '中文',
    value: 'zh',
  },
]
</script>

<template>
  <DropdownMenu v-model="locale" :items="items" />
</template>
