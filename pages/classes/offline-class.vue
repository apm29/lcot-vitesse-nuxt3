<script setup>
// 1 -> News
// 2 -> Chinese Traditional Culture Course
// 3 -> Manual Experience Course
// 4 -> One Sentence A Day
// 5 -> Tongue Twisters
// 6 -> Traditional Culture
// 7 -> Spoken Chinese
useHead({
  title: 'Offline Class',
})

definePageMeta({
  pageTransition: { name: 'fade', mode: 'out-in' },
})
</script>

<template>
  <div p="x-6 y-12" min="h-screen" select="none">
    <h3 m="!b-12" text="xl dark-600 left" font="bold">
      <i i-carbon-crowd-report text="sky-500" inline-block vertical="text-top" />
      Chinese traditional culture courses
    </h3>
    <ModuleArticle :module="2" />
    <h3 m="!y-12" text="xl dark-600 left" font="bold">
      <i i-carbon-crowd-report text="sky-500" inline-block vertical="text-top" />
      Manual experience courses
    </h3>
    <ModuleArticle :module="3" />
  </div>
</template>
