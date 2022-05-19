<script setup lang="ts">
const {
  isActive,
  routeDefaultPath,
  routes,
} = useRouteConfigs()
</script>

<template>
  <i-layout-header
    w-screen
    overflow="x-auto"
    flex="~ shrink-0"
    shadow="lg"
    bg="white"
    h="4rem"
    border="r gray-300"
    items="center"
    z="30"
  >
    <nav v-for="routeItem of routes" :key="routeItem.label">
      <a
        :href="routeDefaultPath(routeItem)"
        flex="~"
        items="center"
        p="x-2 y-1"
        gap="x-2"
        text-link-button
        :class="{
          'text-blue-700': isActive(routeItem),
        }"
      >
        <i :class="routeItem.icon" text-lg inline-block />{{ routeItem.label }}
      </a>
    </nav>
  </i-layout-header>
</template>
