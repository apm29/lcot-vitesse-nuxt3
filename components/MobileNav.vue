<script setup lang="ts">
const {
  isActive,
  routeDefaultPath,
  routes,
  hasSideBar,
} = useRouteConfigs()
</script>

<template>
  <Logo w-20 m="auto" />
  <div border="b gray-500/40" w="full" m="y-4" />
  <section border="l gray-500/30" p="l-2 r-8">
    <nav v-for="routeItem of routes" :key="routeItem.label" flex="~ col">
      <router-link
        :class="{
          '-active-sub': isActive(routeItem) && hasSideBar,
          '-active': isActive(routeItem) && !hasSideBar,
        }"
        m="y-1"
        p="y-2"
        :to="routeDefaultPath(routeItem)"
      >
        {{ $t(routeItem.label) }}
      </router-link>
      <nav v-if="routeItem.sub && routeItem.sub.length" flex="~ col">
        <router-link
          v-for="subItem of routeItem.sub"
          :key="subItem.label"
          p="l-4 y-2"
          m="y-1"
          vertical-align="middle"
          :class="{
            '-active': isActive(subItem),
          }"
          :to="routeDefaultPath(subItem)"
          class="text-gray-500"
        >
          {{ $t(subItem.label) }}
        </router-link>
      </nav>
    </nav>
  </section>
</template>

<style scoped>
.-active {
  @apply !text-sky-500 opacity-100 relative;
}
.-active:after{
  content:"";
  @apply bg-sky-500 absolute -left-2 h-full w-2px top-0 bottom-0;
}

.-active-sub {
  @apply opacity-100 relative;
}
.-active-sub:after{
  content:"";
  @apply bg-gray-500 absolute -left-2 h-full w-2px  top-0 bottom-0;
}
</style>
