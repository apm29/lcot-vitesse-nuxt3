<template>
  <div>
    <Head>
      <Title>{{ $route.params.id }}</Title>
    </Head>
    <div>ID : {{ $route.params.id }}</div>
    <div>Data : {{ data }}</div>
  </div>
</template>
<script setup>
const route = useRoute();
const { data } = await useAsyncData("count", () =>
  $fetch("/api/count", {
    data: { id: route.params.id },
  })
);
</script>
