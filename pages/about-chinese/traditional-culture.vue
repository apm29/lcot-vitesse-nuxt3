<script setup>
useHead({
  title: 'Traditional Culture',
})

definePageMeta({
  pageTransition: { name: "fade", mode: "out-in" },
});
</script>

<template>
  <div p="x-6 y-4">
    <ModuleArticle :module="6" />
  </div>
</template>
