<script setup>
const teachers = [
  {
    pic: '/teacher/rebecca.png',
    name: 'Rebecca Yang',
    desc: 'Teacher Yang is a wonderful teacher,i think her genuine kindness shines through her instruction in the Chinese tour. ',
    tag: 'English/Chinese Teacher',
  },
  {
    pic: '/teacher/keran-li.png',
    name: 'Keran Li',
    desc: 'Mon professeur est très sérieux et charmant, nous aimons sa passion et son humour.',
    tag: 'French/Chinese Teacher',
  },
  {
    pic: '/teacher/ailu.png',
    name: 'Ailu',
    desc: 'Ailu es muy amable, simpática y tiene mucha paciencia.',
    tag: 'Spanish/Chinese Teacher',
  },
  {
    pic: '/teacher/ling-avatar.jpg',
    name: 'Ling',
    desc: 'Ling is great, Cheerful and lively, honest and modest are her attitude during the lessons on tour!',
    tag: 'English/Chinese Teacher',
  },
  {
    pic: '/teacher/monica.png',
    name: 'Monica',
    desc: 'my teacher Monica has so many years of oral practical experience. She speaks like native speakers ,we had great fun in her lesson on tour.',
    tag: 'English/Chinese Teacher',
  },
  {
    pic: '/teacher/drizzle.png',
    name: 'Drizzle',
    desc: 'Drizzle‘s lesson atmosphere is stable and interesting，she will give you many surprises example to help you to understand obscure grammar and language point.',
    tag: 'English/Chinese Teacher',
  },
]
</script>

<template>
  <div grid="~ cols-1 md:cols-2 lg:cols-2 2xl:cols-3" gap="x-4 y-12">
    <div
      v-for="teacher of teachers" :key="teacher.name"
      bg="white"
      rounded="lg"
      shadow="hover:2xl"
      flex="~ col"
      items="left"
      p="x-4 t-3 b-6"
      transition="duration-300 all"
      text="left"
      border="~ transparent hover:gray-300 hover:opacity-50"
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
      <div text="gray-500" font="sans" break-all indent="xl">
        {{ teacher.desc }}
      </div>
    </div>
  </div>
</template>
