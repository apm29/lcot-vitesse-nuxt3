<script setup lang="ts">
const { isActive, hasSideBar, activeRoute } = useRouteConfigs()
</script>

<template>
  <!-- 侧边导航.次级导航 -->
  <i-nav v-if="hasSideBar" vertical border="r gray-100" bg="white" w="200px">
    <i-nav-item
      v-for="subRoute of activeRoute?.sub ?? []" :key="subRoute.label"
      :class="{
        active: isActive(subRoute),
      }"
      :to="subRoute.path"
    >
      <!-- <NuxtLink
        text-link-button
        flex="~"
        items="center"
        :to="subRoute.path"
        decoration-none
        hover:decoration-none
        :class="{
          active: isActive(subRoute),
        }"
      > -->
      {{ subRoute.label }}
      <!-- </NuxtLink> -->
    </i-nav-item>
  </i-nav>
</template>

<style scoped>
.active {
  @apply text-blue-700 opacity-100 relative;
}
.layout-aside {
  width: 210px;
}
</style>
