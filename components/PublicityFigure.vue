<script setup>
</script>

<template>
  <div relative>
    <img src="/dashboard-bg.jpeg" class="bg-img container-absolute">
    <div class="div-cover container-absolute">
      <h2>Study Mandarin Chinese On Tour For Fun</h2>
      <h3>Want to learn Chinese?</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-absolute {
   @apply absolute top-0 left-0 bottom-0 right-0;
}
.bg-img {
  @apply object-cover;
}
.div-cover {
  @apply bg-gray-100 bg-opacity-60;
}
</style>
