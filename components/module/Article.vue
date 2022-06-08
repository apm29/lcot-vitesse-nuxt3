<script setup>
const props = defineProps({
  module: {
    type: Number,
    required: true,
  },
})
// const { modules } = useModuleArticles(props.module)
const { data } = useLazyFetch('/java/content/article/get', {
  method: 'POST',
  body: {
    pageNo: 1,
    pageSize: 999,
    sort: 'addTime',
    search: props.module,
    searchField: 'module',
    order: 'desc',
  },
})
const modules = computed(() => {
  return data.value?.data?.records ?? []
})
</script>

<template>
  <div>
    <div v-for="article of modules" :key="article.id" class="px-4 md:px-0">
      <div class="grid grid-cols-8 gap-3">
        <img :src="article.banner" alt="banner" height="100%" class="article-image">
        <ModuleArticleGlance class="pl-3 col-span-5" :article="article" />
        {{ article }}
      </div>
      <hr class="my-4">
    </div>
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
