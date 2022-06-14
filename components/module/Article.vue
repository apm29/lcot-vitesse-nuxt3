<script setup>
const props = defineProps({
  module: {
    type: Number,
    required: true,
  },
})
const { data: modules } = await useFetch(`/api/module-article/${props.module}`)
</script>

<template>
  <div>
    <template v-for="article of modules" :key="article.id">
      <ModuleArticleGlance
        :article="article"
      />
    </template>
    <div v-if="!modules || !modules.length" class="text-gray-400">
      暂无内容
    </div>
  </div>
</template>

<style scoped>
.article-image {
  @apply object-cover m-0 col-span-3 row-span-full !important;
}
</style>
