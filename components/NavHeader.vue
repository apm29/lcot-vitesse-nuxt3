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
    <i-nav h-full flex="~ shrink-0 nowrap">
      <i-nav-item
        v-for="routeItem of routes"
        :key="routeItem.label"
        h-full
        :active="isActive(routeItem)"
        :to="routeDefaultPath(routeItem)"
      >
        {{ routeItem.label }}
      </i-nav-item>
    </i-nav>
  </i-layout-header>
</template>

<style scoped>
.-active {
  @apply !text-blue-700 opacity-100 relative;
}
.-active:after{
  content:"";
  @apply bg-blue-700 absolute bottom-0 left-3/100 right-3/100 h-3px;
}
</style>
