<script setup lang="ts">
useHead({
  titleTemplate: 'Nuxt.js - %s', // or, title => `My App - ${title}`
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'My amazing site.' }],
  bodyAttrs: {
    class: 'app',
  },
  script: [{
    src: '//unpkg.com/spacingjs',
    defer: true,
  }],
  link: [{
    rel: 'icon',
    href: '/favicon.ico',
  }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: auto;
  margin: 0;
  padding: 0;
}

html.dark {
  /* background: #222; */
  /* color: white; */
}
a {
  text-decoration: none !important;
}

a:hover {
  text-decoration: none !important;
}
</style>
