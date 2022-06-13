<script setup lang="ts">
const {
  isActive,
  routeDefaultPath,
  routes,
} = useRouteConfigs()
</script>

<template>
  <header
    overflow="x-auto"
    flex="~ shrink-0 nowrap"
    shadow="lg"
    bg="white"
    h="4rem"
    border="r gray-300"
    items="center"
    z="30"
    p="x-2"
    gap="x-3"
  >
    <Logos />
    <nav h-full flex="~ shrink-0 nowrap">
      <router-link
        v-for="routeItem of routes"
        :key="routeItem.label"
        h-full
        flex="~"
        items="center"
        p="x-2"
        :class="{
          '-active': isActive(routeItem),
        }"
        :to="routeDefaultPath(routeItem)"
      >
        {{ routeItem.label }}
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
.-active {
  @apply !text-sky-500 opacity-100 relative;
}
.-active:after{
  content:"";
  @apply bg-sky-500 absolute bottom-0 left-3/100 right-3/100 h-3px;
}
</style>
