<script setup>
useHead({
  title: 'Spoken Chinese',
})

definePageMeta({
  pageTransition: { name: 'fade', mode: 'out-in' },
})
</script>

<template>
  <div p="x-6 y-4">
    <ModuleArticle :module="7" />
  </div>
</template>

