<script setup>
import { BASE_URL } from '~~/const'
defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['submit'])
const name = ref()
const country = ref()
const email = ref()
const inquiry = ref()
const loading = ref(false)
const form = ref()

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
    const response = await $fetch(
      `/api/mail/send`,
      {
        method: 'POST',
        body: JSON.stringify({
          fullName: name.value,
          country: country.value,
          email: email.value,
          inquiry: inquiry.value,
        }),
        ssr: false
      },
    )
    if (response?.code === 200) {
      alert(`发送成功`)
      form.value.reset()
    }
    else { alert(`发送失败`) }
  }
  catch (error) {
    alert(`发送失败`)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <form ref="form">
    <fieldset flex="~ md:row col" items="stretch md:center" max="w-full">
      <q-input v-model="name" :dark="dark" flex="grow" w="md:1/2" required name="name" placeholder="full name" />
      <span w="2" h="2" />
      <q-input v-model="country" :dark="dark" flex="grow" w="md:1/2" name="country" placeholder="your country" />
    </fieldset>

    <fieldset>
      <q-input v-model="email" :dark="dark" w-full required name="email" placeholder="your email" />
    </fieldset>

    <fieldset>
      <q-input v-model="inquiry" :dark="dark" type="textarea" w-full name="inquiry" placeholder="your inquiry here..." />
    </fieldset>
    <fieldset>
      <button bg-sky-500 text-white font-bold rounded w-full outline="focus:none" p="x-4 y-1" :loading="loading"
        color="facebook" block type="button" @click="handleBeforeSubmit">
        Submit
      </button>
    </fieldset>
  </form>
</template>

<style scoped>
fieldset {
  margin-bottom: 0.5rem;
}
</style>

