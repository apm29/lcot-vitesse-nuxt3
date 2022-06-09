<script setup>
const { data: teachers } = useFetch('/api/teachers')
</script>

<template>
  <div grid="~ cols-1 md:cols-2 lg:cols-2 2xl:cols-3" gap="x-4 y-12">
    <div
      v-for="teacher of teachers" :key="teacher.name"
      bg="white"
      rounded="lg"
      flex="~ col"
      items="left"
      p="x-4 t-3 b-6"
      transition="duration-300 all"
      text="left"
      border="~ transparent hover:gray-300 hover:opacity-50"
      shadow="hover:2xl"
    >
      <img
        :src="teacher.pic"
        w="36"
        h="36"
        rounded="full"
        border="6 blue-300"
        self="center"
        m="b-4"
      >
      <h3
        class="tag"
        text="xs blue-500"
        m="b-2"
        flex="~"
        items="center"
        gap="2"
      >
        <span
          inline-block w="1"
          h="full"
          rounded="r-2xl"
          bg="blue-500"
        />
        {{ teacher.tag }}
      </h3>
      <h3 m="t-4" text="gray-600 xl" font="extrabold">
        {{ teacher.name }}
      </h3>
      <div class="mt-4 text-sm font-bold text-gray-300">
        Students Says...
      </div>
      <div text="gray-500" font="sans" break-all indent="xl" leading-snug>
        {{ teacher.desc }}
      </div>
    </div>
  </div>
</template>
