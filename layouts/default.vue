<script setup lang="ts">
const {
  isActive,
  hasSideBar,
  activeRoute,
} = useRouteConfigs()
</script>

<template>
  <i-layout w-full bg="gray-200" items="center">
    <!-- 顶部栏主导航 -->
    <NavHeader sticky top-0 />
    <i-layout vertical>
      <!-- 侧边导航.次级导航 -->
      <i-layout-aside
        v-if="hasSideBar"
        gap="x-2"
        border="r gray-100"
        bg="white"
      >
        <nav v-for="subRoute of activeRoute?.sub ?? []" :key="subRoute.label">
          <a
            text-link-button
            :class="{
              'text-blue-700': isActive(subRoute),
            }"
            flex="~"
            items="center"
            p="x-2 y-3"
            gap="x-2"
            :href="subRoute.path"
          >
            <i :class="subRoute.icon" text-lg inline-block />
            {{ subRoute.label }}
          </a>
        </nav>
      </i-layout-aside>
      <i-layout>
        <i-layout-content
          xl:max-w-900px
          lg:max-w-700px
          md:max-w-600px
          sm:max-w-90vw
          bg="white"
        >
          <slot />
          <i-layout-footer>
            <Footer />
          </i-layout-footer>
        </i-layout-content>
      </i-layout>
    </i-layout>
  </i-layout>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';
@include i-layout-aside() {
  ----width: 160px !important;
}
</style>
