<script setup lang="ts">
const router = useRouter()
useHead({
  title: 'Not Found',
})

definePageMeta({
  pageTransition: { name: 'fade', mode: 'out-in' },
})
</script>

<template>
  <Head>
    <Title>Not Found</Title>
  </Head>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <div>Not found</div>
    <div>
      <button btn text-sm m="3 t8" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
