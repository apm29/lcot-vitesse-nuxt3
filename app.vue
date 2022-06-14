<script setup lang="ts">
useHead({
  titleTemplate: title => title ? `${title} - 旅学中文` : '旅学中文',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'learn chinese on tour.' },
    { name: 'keywords', content: 'chinese, tour, learn chinese, hangzhou tour, online course, offline course' },
  ],
  bodyAttrs: {
    class: 'app',
  },
  script: [
    {
      src: '//unpkg.com/spacingjs',
      defer: true,
    },
    {
      src: 'https://hm.baidu.com/hm.js?a98e2932a83d9ee1d41ae913f596b377',
    },
  ],
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


.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
