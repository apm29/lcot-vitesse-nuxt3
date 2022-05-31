<script setup lang="ts">
const {
  isActive,
  hasSideBar,
  activeRoute,
} = useRouteConfigs()
</script>

<template>
  <i-layout bg="gray-200" items="stretch">
    <!-- 顶部栏主导航 -->
    <NavHeader sticky top-0 />
    <i-layout vertical self="center" style="min-height: calc(100vh - 10rem);">
      <!-- 侧边导航.次级导航 -->
      <NavSider />
      <i-layout>
        <i-layout-content
          xl:w-900px
          lg:w-700px
          md:w-600px
          sm:w-90vw
          bg="white"
        >
          <slot />
        </i-layout-content>
      </i-layout>
    </i-layout>
    <i-layout-footer>
      <Footer />
    </i-layout-footer>
  </i-layout>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';
@include i-layout-aside() {
  ----width: 160px !important;
}
</style>
