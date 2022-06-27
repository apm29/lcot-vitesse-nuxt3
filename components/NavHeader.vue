<script setup lang="ts">
const {
  isActive,
  routeDefaultPath,
  routes,
} = useRouteConfigs()
const [showMenu, toggleMenu] = useToggle()
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
    <Logo h-3rem inline-block px-4 />
    <!-- 移动设备隐藏主菜单 -->
    <nav h-full flex="md:~ shrink-0 nowrap" hidden>
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
        {{ $t(routeItem.label) }}
      </router-link>
    </nav>
    <div flex="grow" />
    <LocaleSwitch />
    <nav self="center" md:hidden inline @click="toggleMenu()">
      <i i-mdi-menu inline-block text="2xl" />
    </nav>
    <PartialModal v-model="showMenu">
      <MobileNav />
    </PartialModal>
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
