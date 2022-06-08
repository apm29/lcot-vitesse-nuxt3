export async function useModuleArticles(module: number) {
  const { data } = await useFetch<JavaResponse<PagedData<Article>>>('/java/content/article/get', {
    method: 'POST',
    body: {
      pageNo: 1,
      pageSize: 999,
      sort: 'addTime',
      search: module,
      searchField: 'module',
      order: 'desc',
    },
  })
  const modules = computed(() => {
    return data.value.data.records
  })

  return {
    modules,
  }
}
