<script setup lang="ts">
useHead({
  titleTemplate: 'Nuxt.js - %s', // or, title => `My App - ${title}`
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'My amazing site.' }],
  bodyAttrs: {
    class: 'app',
  },
})
interface RouteItem {
  label: string
  path?: string
  icon: string
  sub?: RouteItem[]
}
const routes: Array<RouteItem> = [
  {
    label: 'Home',
    path: '/',
    icon: 'i-mdi-home',
  },
  {
    label: 'About us',
    path: '/about',
    icon: 'i-mdi-airplane-takeoff',
    sub: [
      {
        label: 'Our service',
        path: '/about/our-service',
        icon: 'i-mdi-face-agent',
      },
      {
        label: 'Our team',
        path: '/about/our-team',
        icon: 'i-mdi-account-group',
      },
    ],
  },
  {
    label: 'Course on tours',
    icon: 'i-mdi-wallet-travel',
    path: '/classes',
    sub: [
      {
        label: 'Online class',
        path: '/classes/online-class',
        icon: 'i-mdi-television-classic',
      },
      {
        label: 'Offline class',
        path: '/classes/offline-class',
        icon: 'i-mdi-human-male-board',
      },
    ],
  },
  {
    label: 'Living in Hangzhou',
    path: '/living-in-hangzhou',
    icon: 'i-mdi-city-variant',
    sub: [
      {
        label: 'School in Hangzhou',
        path: '/living-in-hangzhou/school-in-hangzhou',
        icon: 'i-mdi-school',
      },
      {
        label: 'Tours in Hangzhou',
        path: '/living-in-hangzhou/tours-in-hangzhou',
        icon: 'i-mdi-train-car',
      },
    ],
  },
  {
    label: 'About chinese',
    path: '/about-chinese',
    icon: 'i-mdi-post-outline',
    sub: [
      {
        label: 'One sentence a day',
        path: '/about-chinese/daily-sentence',
        icon: 'i-mdi-chat',
      },
      {
        label: 'Tongue twist',
        path: '/about-chinese/tongue-twist',
        icon: 'i-mdi-thumb-up',
      },
      {
        label: 'Traditional culture',
        path: '/about-chinese/traditional-culture',
        icon: 'i-mdi-silverware-variant',
      },
      {
        label: 'Spoken Chinese',
        path: '/about-chinese/spoken-chinese',
        icon: 'i-mdi-emoticon-excited-outline',
      },
    ],
  },
  {
    label: 'Contact us',
    path: '/contact-us',
    icon: 'i-mdi-email-outline',
  },
]
const route = useRoute()
const isActive = function (routeItem: RouteItem): boolean {
  return (
    route.path === routeItem.path
    || (routeItem.sub && routeItem.sub.some(r => isActive(r)))
    || false
  )
}
const activeRoute = computed(() => {
  return routes.find(route => isActive(route))
})
function routeDefaultPath(routeItem: RouteItem) {
  if (routeItem.sub && routeItem.sub.length)
    return routeItem.sub[0].path
  else
    return routeItem.path
}
const hasSideBar = computed(() => {
  const activeRouteValue = unref(activeRoute)
  return activeRouteValue && activeRouteValue.sub && activeRouteValue.sub.length
})
</script>

<template>
  <main w="screen">
    <!-- 顶部栏主导航 -->
    <header
      fixed
      top-0
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
    </header>
    <main grid gap="x-4" style="grid-template-columns: 160px 1fr; grid-template-rows: 1fr">
      <!-- 侧边导航.次级导航 -->
      <div min-h-screen>
        <aside
          v-if="hasSideBar"
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
      <main flex="grow" p="t-4rem" max-w-1140px>
        <NuxtPage />
      </main>
    </main>
  </main>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
