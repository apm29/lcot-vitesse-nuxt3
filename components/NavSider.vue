<script setup lang="ts">
const { isActive, hasSideBar, activeRoute } = useRouteConfigs()
</script>

<template>
  <!-- 侧边导航.次级导航 -->
  <nav v-if="hasSideBar" flex="~ col" border="r gray-100" bg="white" w="180px" p="t-6">
    <router-link
      v-for="subRoute of activeRoute?.sub ?? []" :key="subRoute.label"
      :to="subRoute.path"
      :class="{
        '-active': isActive(subRoute),
      }"
      p="l-3 r-2 y-1"
      text-gray-500
      relative
    >
      <i
        v-show="isActive(subRoute)"
        i-carbon-caret-right inline-block
        text="sky-400"
        left="-2"
        top="2"
        absolute vertical="text-top"
      />
      {{ $t(subRoute.label) }}
    </router-link>
  </nav>
</template>

<style scoped>
.-active {
  @apply text-sky-400 opacity-100 relative underline;
}
.layout-aside {
  width: 210px;
}
</style>
