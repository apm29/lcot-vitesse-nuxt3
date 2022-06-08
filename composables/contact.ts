import type { AsyncData } from 'nuxt/dist/app/composables/asyncData'
enum ContactTypes {
  GET_STARTED = 'GET_STARTED',
  ONE_ON_ONE_CLASS = 'ONE_ON_ONE_CLASS',
  CONTACT_US = 'CONTACT_US',
}

export function generateUUID() {
  const s: string[] = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++)
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)

  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((parseInt(s[19]) & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'
  return s.join('')
}

export function useContact() {
  const router = useRouter()
  function travelToContact(type: ContactTypes) {
    router.push({
      path: '/contact-us',
      query: {
        type,
      },
    })
  }
  const uuid = ref(generateUUID())
  function submitContactForm(
    fullName: string, country: string, email: string, inquiry: string,
    uuid: string, captcha: string,
  ): AsyncData<JavaResponse<any>, any> {
    return useFetch<JavaResponse<any>>('/java/auth/mail/send', {
      method: 'POST',
      body: {
        fullName,
        country,
        email,
        inquiry,
        uuid,
        captcha,
      },
    })
  }
  return {
    ContactTypes,
    travelToContact,
    submitContactForm,
    uuid,
    regenerateUUID: () => {
      uuid.value = generateUUID()
    },
  }
}
