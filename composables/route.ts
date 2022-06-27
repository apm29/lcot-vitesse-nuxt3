interface RouteItem {
  label: string
  path?: string
  icon: string
  sub?: RouteItem[]
}
const routes: Array<RouteItem> = [
  {
    label: 'home',
    path: '/',
    icon: 'i-mdi-home',
  },
  {
    label: 'about-us',
    path: '/about',
    icon: 'i-mdi-airplane-takeoff',
    sub: [
      {
        label: 'our-service',
        path: '/about/our-service',
        icon: 'i-mdi-face-agent',
      },
      {
        label: 'our-team',
        path: '/about/our-team',
        icon: 'i-mdi-account-group',
      },
    ],
  },
  {
    label: 'course-on-tours',
    icon: 'i-mdi-wallet-travel',
    path: '/classes',
    sub: [
      {
        label: 'online-class',
        path: '/classes/online-class',
        icon: 'i-mdi-television-classic',
      },
      {
        label: 'offline-class',
        path: '/classes/offline-class',
        icon: 'i-mdi-human-male-board',
      },
    ],
  },
  {
    label: 'live-in-hangzhou',
    path: '/living-in-hangzhou',
    icon: 'i-mdi-city-variant',
    sub: [
      {
        label: 'school-in-hangzhou',
        path: '/living-in-hangzhou/school-in-hangzhou',
        icon: 'i-mdi-school',
      },
      {
        label: 'tours-in-hangzhou',
        path: '/living-in-hangzhou/tours-in-hangzhou',
        icon: 'i-mdi-train-car',
      },
    ],
  },
  {
    label: 'about-chinese',
    path: '/about-chinese',
    icon: 'i-mdi-post-outline',
    sub: [
      {
        label: 'one-sentence-a-day',
        path: '/about-chinese/daily-sentence',
        icon: 'i-mdi-chat',
      },
      {
        label: 'tongue-twist',
        path: '/about-chinese/tongue-twist',
        icon: 'i-mdi-thumb-up',
      },
      {
        label: 'traditional-culture',
        path: '/about-chinese/traditional-culture',
        icon: 'i-mdi-silverware-variant',
      },
      {
        label: 'spoken-chinese',
        path: '/about-chinese/spoken-chinese',
        icon: 'i-mdi-emoticon-excited-outline',
      },
    ],
  },
  {
    label: 'contact-us',
    path: '/contact-us',
    icon: 'i-mdi-email-outline',
  },
]
export function useRouteConfigs() {
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
    const activeRouteValue = activeRoute.value
    return activeRouteValue && activeRouteValue.sub && activeRouteValue.sub.length
  })
  return {
    isActive,
    hasSideBar,
    activeRoute,
    routeDefaultPath,
    routes,
  }
}
