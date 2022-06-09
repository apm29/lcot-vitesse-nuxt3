import { BASE_URL } from '~~/const'

export default defineEventHandler(async (event) => {
  const { data } = await $fetch<JavaResponse<Article>>(
    `${BASE_URL}/java/content/article/getById`,
    {
      method: 'POST',
      body: {
        id: event.context.params.id,
      },
    })
  return data
})
