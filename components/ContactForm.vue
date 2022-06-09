<script setup>
import { BASE_URL } from '~~/const'
const props = defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['submit'])
const placeholderColor = computed(() => {
  return !props.dark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(41, 34, 34, 0.8)'
})
const name = ref()
const country = ref()
const email = ref()
const inquiry = ref()
const captcha = ref()
const loading = ref(false)
const [showCaptcha, toggle] = useToggle()
const { uuid, regenerateUUID } = useContact()
function handleBeforeSubmit() {
  // 邮箱正则
  const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  if (email.value && name.value && emailReg.test(email.value)) {
    toggle()
    regenerateUUID()
  }
  else { alert('Please fill in the correct information') }
}
async function handleSubmit() {
  emits('submit', {
    name: unref(name),
    country: unref(country),
    email: unref(email),
    inquiry: unref(inquiry),
  })
  try {
    loading.value = true
    // const { data } = await $fetch('/api/contact', {
    //   method: 'POST',
    //   body: {
    //     fullName: unref(name),
    //     country: unref(country),
    //     email: unref(email),
    //     inquiry: unref(inquiry),
    //     uuid: unref(uuid),
    //     captcha: unref(captcha),
    //   },
    // })
    const response = await fetch(
    `${BASE_URL}/java/auth/mail/send`,
    {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        fullName: unref(name),
        country: unref(country),
        email: unref(email),
        inquiry: unref(inquiry),
        uuid: unref(uuid),
        captcha: unref(captcha),
      }),
    },
    )
    if (response.json()?.code === 200)
      alert(`Success:${response.json().msg}`)
    else
      alert(`Error:${response.json().msg}`)

    toggle()
  }
  catch (error) {
    alert(JSON.stringify(error))
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <i-form>
    <i-form-group inline>
      <i-input v-model="name" required name="name" placeholder="full name" />
      <span w-2 />
      <i-input v-model="country" name="country" placeholder="your country" />
    </i-form-group>

    <i-form-group>
      <i-input v-model="email" required name="email" placeholder="your email" />
    </i-form-group>

    <i-form-group>
      <i-textarea v-model="inquiry" name="inquiry" placeholder="your inquiry here..." />
    </i-form-group>
    <i-form-group>
      <i-button :loading="loading" color="facebook" block @click="handleBeforeSubmit">
        Submit
      </i-button>
    </i-form-group>
    <i-modal v-model="showCaptcha" color="primary" size="lg">
      <template #header>
        Input the captcha:
      </template>
      <div flex="~" items="center" gap="x-3">
        <img mix-blend-multiply :src="`${BASE_URL}/java/auth/captcha/image?uuid=${uuid}`" rounded h="3rem" w="12rem" @click="regenerateUUID">
        <input v-model="captcha" text="dark-600 center" flex="grow" h="3rem" rounded name="captcha" placeholder="Enter the image verification code">
      </div>
      <template #footer>
        <i-button :loading="loading" color="twitter" block @click="handleSubmit">
          Submit
        </i-button>
      </template>
    </i-modal>
  </i-form>
</template>

<style scoped>
:deep(.input){
  backdrop-filter: blur(8px) !important;
}
</style>

<style scoped lang="scss">
@import '@inkline/inkline/css/mixins';
@include i-input() {
  ----background: rgba(222,222,222,0.5) !important;
  ----placeholder--color: v-bind(placeholderColor) !important;
  ----border-color--focus: rgb(100, 92, 202) !important;
  ----border-width: 1.5px !important;
}
</style>
