enum ContactTypes {
  GET_STARTED = 'GET_STARTED',
  ONE_ON_ONE_CLASS = 'ONE_ON_ONE_CLASS',
  CONTACT_US = 'CONTACT_US',
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
  return {
    ContactTypes,
    travelToContact,
  }
}
