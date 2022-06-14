<script setup lang="ts">
const { travelToContact, ContactTypes } = useContact()
</script>

<template>
  <div relative>
    <img object-cover src="/dashboard-bg.jpeg" class="bg-img" filter="~ grayscale-100">
    <div
      class="container-cover" absolute top-0 left-0 bottom-0 right-0
      flex="~ col" items="center" justify="center"
      bg="gray-100 opacity-55" gap="y-3"
    >
      <h2 text="3xl dark-300 center" max="!w-8/10" font-extrabold>
        Study Mandarin Chinese On Tour For Fun
      </h2>
      <h3 text="xl dark-200 center">
        Want to learn Chinese?
      </h3>
      <div flex="~" items="center" gap="x-3">
        <button bg="sky-400 hover:sky-600" p="x-3 y-1" text="white" rounded-full @click="travelToContact(ContactTypes.GET_STARTED)">
          Get Started
        </button>
        <button bg="sky-400" p="x-3 y-1" text="white" rounded-full @click="travelToContact(ContactTypes.ONE_ON_ONE_CLASS)">
          1 on 1 Class
        </button>
      </div>
    </div>
  </div>
</template>
