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
  else
    alert('Please fill in the correct information')
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
  <form>
    <fieldset flex="~" items="center">
      <input v-model="name" flex="grow" required name="name" placeholder="full name">
      <span w-2 />
      <input v-model="country" flex="grow" name="country" placeholder="your country">
    </fieldset>

    <fieldset>
      <input v-model="email" w-full required name="email" placeholder="your email">
    </fieldset>

    <fieldset>
      <textarea v-model="inquiry" w-full name="inquiry" placeholder="your inquiry here..." />
    </fieldset>
    <fieldset>
      <button
        bg-sky-500 text-white font-bold rounded w-full
        outline="focus:none"
        p="x-4 y-1"
        :loading="loading" color="facebook" block type="button"
        @click="handleBeforeSubmit"
      >
        Submit
      </button>
    </fieldset>
  </form>
</template>

<style scoped>
input, textarea{
  backdrop-filter: blur(8px) !important;
}
input, textarea {
  @apply bg-light-400 border border-gray-300 bg-opacity-50 rounded p-2 focus:outline-2 focus:outline-blue-700 focus:border-none;
}

input::placeholder {
  color:v-bind(placeholderColor);
}

textarea::placeholder {
  color:v-bind(placeholderColor);
}

fieldset {
  @apply mb-2
}
</style>

