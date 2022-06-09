import { BASE_URL } from '~~/const'

export default defineEventHandler(async (event) => {
  const { data } = await $fetch<JavaResponse<PagedData<Article>>>(
    `${BASE_URL}/java/content/article/get`,
    {
      method: 'POST',
      body: {
        pageNo: 1,
        pageSize: 999,
        sort: 'addTime',
        search: event.context.params.module,
        searchField: 'module',
        order: 'desc',
      },
    })
  return data?.records ?? []
})
