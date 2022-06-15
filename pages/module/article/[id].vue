<script setup>
const route = useRoute()
const { data: article } = await useFetch(`/api/article/${route.params.id}`)
useHead({
  title: article.value ? article.value.title : '加载中',
})

definePageMeta({
  pageTransition: { name: 'fade', mode: 'out-in' },
})
</script>

<template>
  <div>
    <div class="relative w-full">
      <img
        v-if="article.banner"
        :src="article.banner"
        class="md:h-96 h-80 object-cover w-full relative"
      >
      <div
        class="font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 text-center md:text-6xl text-4xl"
        text="shadow-lg shadow-outline-black"
      >
        {{ article.title || "Building a Culture of Excellence" }}
        <div class="font-light text-xl">
          {{
            article.subtitle
              || "Vestibulum volutpat pretium libero. Suspendisse eu ligula."
          }}
        </div>
      </div>
    </div>
    <article
      p="x-4 md:x-0 t-10"
      class="prose sm:prose lg:prose-lg xl:prose-2xl mx-auto"
      v-html="article.content"
    />
  </div>
</template>
