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
    border="~ gray-300 opacity-50"
    rounded="xl"
    shadow="hover:2xl"
  >
    <img
      :src="article.banner"
      col-span-3
      border="~ transparent"
      rounded="t-xl l-none  md:l-xl md:r-none"
      h="!full"
      object="cover"
      :alt="article.title"
    >
    <div
      flex="~ col"
      items="stretch"
      text="left"
      class="col-span-full md:col-span-5"
      p="y-4 r-4"
    >
      <NuxtLink
        m="y-4" font="bold"
        class="!page-link text-xl" :to="`/module/article/${article.id}`" tag="h3"
      >
        {{ article.title }}
      </NuxtLink>
      <p break-all text="gray-500 sm">
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
      <div m="t-4">
        <time self="end" float="left" text="gray-500 xs">{{ filterTime(article.addTime) }}</time>
        <NuxtLink
          self="end"
          cursor="pointer"
          relative="~"
          m="r-3 b-3"
          p="x-2 y-1"
          bg="opacity-80 purple-600"
          outline="none"
          border="none"
          overflow="hidden"
          text-white
          :to="`/module/article/${article.id}`" tag="button" class="button-detail" float="right"
        >
          View details
          <i inline-block i-carbon-caret-right vertical="text-top" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-detail {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(270, 71%, 49%);
  overflow: hidden;
  cursor: pointer;
}

.button-detail::after {
  content: '';
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  left: 0;
  width: 1.25em;
  transform: translate3d(-525%, 0, 0) rotate(35deg);
}

.button-detail:hover::after {
  transition: transform 0.45s ease-in-out;
  transform: translate3d(450%, 0, 0) rotate(35deg);
}
</style>
