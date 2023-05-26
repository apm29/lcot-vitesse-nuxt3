import { BASE_URL } from '~~/const'
import { useRawBody } from 'h3'
export default defineEventHandler(async (event) => {
  
  const body = await useRawBody(event)

  const res = await $fetch<JavaResponse<string>>(
    `${BASE_URL}/java/auth/mail/sendIt`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body
      }
    )
  return res
})
