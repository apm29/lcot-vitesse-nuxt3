<script setup lang="ts">
const {
  isActive,
  routeDefaultPath,
  routes,
} = useRouteConfigs()
</script>

<template>
  <i-layout-header
    overflow="x-auto"
    flex="~ shrink-0"
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
    <nav v-for="routeItem of routes" :key="routeItem.label" h-full>
      <NuxtLink
        :to="routeDefaultPath(routeItem)"
        flex="~"
        items="center"
        h-full
        gap="x-2"
        text-link-button
        decoration-none
        hover:decoration-none
        :class="{
          active: isActive(routeItem),
        }"
      >
        {{ routeItem.label }}
      </NuxtLink>
    </nav>
  </i-layout-header>
</template>

<style scoped>
.active {
  @apply text-blue-700 opacity-100 relative;
}
.active:after{
  content:"";
  @apply bg-blue-700 absolute bottom-0 left-3/100 right-3/100 h-3px;
}
</style>
