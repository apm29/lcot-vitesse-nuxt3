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
const loading = ref(false)
function handleBeforeSubmit() {
  // 邮箱正则
  const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  if (email.value && name.value && emailReg.test(email.value))
    handleSubmit()

  else alert('Please fill in the correct information')
}
async function handleSubmit() {
  try {
    loading.value = true
    const response = await fetch(
    `${BASE_URL}/java/auth/mail/sendIt`,
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
        fullName: name.value,
        country: country.value,
        email: email.value,
        inquiry: inquiry.value,
      }),
    },
    )
    if (response.json()?.code === 200)
      alert(`Success:${response.json().msg}`)
    else
      alert(`Error:${response.json().msg}`)
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
