<script setup lang="ts">
const {
  isActive,
  hasSideBar,
  activeRoute,
} = useRouteConfigs()
</script>

<template>
  <main w="screen">
    <!-- 顶部栏主导航 -->
    <NavHeader />
    <main
      grid
      :class="{
        'grid-cols-with-side': hasSideBar,
        'grid-cols-no-side': !hasSideBar,
      }"
      text="center"
      justify="center"
    >
      <!-- 侧边导航.次级导航 -->
      <div v-if="hasSideBar" min-h-screen>
        <aside
          gap="x-2"
          border="r gray-100"
          bg="white"
          fixed
          h-full
          top="4rem"
          w="160px"
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
        </aside>
      </div>
      <main p="t-4rem x-4" max-w-640px>
        <slot />
        <Footer />
        <div class="mt-5 mx-auto text-center opacity-25 text-sm">
          [Home Layout]
        </div>
      </main>
    </main>
  </main>
</template>

<style>
.grid-cols-with-side{
  grid-template-columns: 160px 1fr;
  /* grid-template-rows: 1fr */
}
.grid-cols-no-side{
  /* grid-template-columns: 1fr; */
  /* grid-template-rows: 1fr */
}
</style>
