<script setup>
import { filterHtml, filterTime } from '~~/helpers/filters'
defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    flex="~ col"
    grid="md:~ md:cols-8" gap="3"
    m="b-8"
  >
    <img
      :src="article.banner" alt="article-banner" height="100%"
      col-span-3
      border="~ transparent hover:gray-300 hover:opacity-50"
      shadow="hover:2xl"
    >
    <div
      flex="~ col"
      items="stretch"
      text="left"
      class="col-span-full md:col-span-5 prose"
    >
      <NuxtLink class="article-title !page-link" :to="`/module/article/${article.id}`" tag="h3">
        {{ article.title }}
      </NuxtLink>
      <p break-all>
        {{ filterHtml(article.content) }}...
      </p>
      <p v-if="article.subject">
        <template v-for="subject of article.subject.split(',')">
          <span
            v-if="subject.text" :key="subject.id"
            class="mr-1 dark:text-gray-100 hover:underline hover:cursor-pointer"
          >
            #{{ subject.text }}
          </span>
        </template>
      </p>
      <time class="self-end  dark:text-gray-600 ">{{ filterTime(article.addTime) }}</time>
    </div>
  </div>
</template>
