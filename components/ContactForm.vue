<script setup>
const emits = defineEmits(['submit'])
const name = ref()
const country = ref()
const email = ref()
const inquiry = ref()
const captcha = ref()
const loading = ref(false)
const [showCaptcha, toggle] = useToggle()
const { submitContactForm, uuid, regenerateUUID } = useContact()
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
    const { data } = await submitContactForm(
      unref(name),
      unref(country),
      unref(email),
      unref(inquiry),
      unref(uuid),
      unref(captcha),
    )
    if (data.value?.code === 200)
      alert(`Success:${data.value.msg}`)
    else
      alert(`Error:${data.value.msg}`)

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
        <img mix-blend-multiply :src="`/java/auth/captcha/image?uuid=${uuid}`" rounded h="3rem" w="12rem" @click="regenerateUUID">
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
