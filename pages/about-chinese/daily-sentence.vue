<script setup>
useHead({
  title: 'Daily Sentence',
})

definePageMeta({
  pageTransition: { name: 'fade', mode: 'out-in' },
})
</script>

<template>
  <div p="x-6 y-4">
    <ModuleArticle :module="4" />
  </div>
</template>

