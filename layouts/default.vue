<script setup lang="ts">
</script>

<template>
  <main bg="gray-200" items="stretch">
    <!-- 顶部栏主导航 -->
    <NavHeader sticky top-0 z-50 />
    <main vertical self="center" style="min-height: calc(100vh - 10rem);" flex="~" justify="center">
      <!-- 侧边导航.次级导航 -->
      <NavSider class="md:!flex !hidden" />
      <main>
        <section
          xl:w-900px
          lg:w-750px
          md:w-650px
          sm:w-full
          w-full
          bg="white"
          transition="all duration-450"
          min-h-screen
        >
          <slot />
        </section>
      </main>
    </main>
    <footer>
      <ContactUsFooter />
    </footer>
  </main>
</template>

<style lang="scss">
</style>
