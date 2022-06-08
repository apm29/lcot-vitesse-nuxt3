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
    <NavHeader sticky top-0 z-50 />
    <i-layout vertical self="center" style="min-height: calc(100vh - 10rem);">
      <!-- 侧边导航.次级导航 -->
      <NavSider class="md:!block !hidden" />
      <i-layout>
        <i-layout-content
          xl:w-900px
          lg:w-750px
          md:w-650px
          sm:w-full
          w-full
          bg="white"
          transition="all duration-450"
        >
          <slot />
        </i-layout-content>
      </i-layout>
    </i-layout>
    <i-layout-footer>
      <ContactUsFooter />
    </i-layout-footer>
  </i-layout>
</template>

<style lang="scss">
@import '@inkline/inkline/css/mixins';
@include i-layout-aside() {
  ----width: 160px !important;
}

@include i-input() {
  ----background: rgba(222,222,222,0.5) !important;
  ----placeholder--color: rgba(255, 255, 255, 0.8) !important;
  ----border-color--focus: rgb(100, 92, 202) !important;
  ----border-width: 1.5px !important;
}
</style>
