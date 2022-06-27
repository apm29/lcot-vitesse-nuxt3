<script setup>
defineProps({
  type: {
    type: String,
    validator(v) {
      return ['article', 'article-glance'].includes(v)
    },
  },
})
</script>

<template>
  <div>type</div>
</template>
