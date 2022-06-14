<script setup>
useHead({
  title: 'Tongue Twist',
})

definePageMeta({
  pageTransition: { name: "fade", mode: "out-in" },
});
</script>

<template>
  <div p="x-6 y-4">
    <ModuleArticle :module="5" />
  </div>
</template>

