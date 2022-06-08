export function useModuleArticles(module: number) {
  const rawData = ref()
  useFetch<JavaResponse<PagedData<Article>>>('/java/content/article/get', {
    method: 'POST',
    body: {
      pageNo: 1,
      pageSize: 999,
      sort: 'addTime',
      search: module,
      searchField: 'module',
      order: 'desc',
    },
  }).then(({ data }) => {
    rawData.value = data
  })
  const modules = computed(() => {
    return rawData.value?.data?.records ?? []
  })

  return {
    modules,
  }
}
