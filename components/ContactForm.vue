<script setup>
const emits = defineEmits(['submit'])
const name = ref()
const country = ref()
const email = ref()
const inquiry = ref()
function handleSubmit(formData) {
  alert(formData)
  emits('submit', formData)
}
</script>

<template>
  <i-form @submit="handleSubmit">
    <i-form-group inline>
      <i-input v-model="name" required placeholder="full name" />
      <span w-2 />
      <i-input v-model="country" placeholder="your country" />
    </i-form-group>
    <i-form-group required>
      <i-input v-model="email" placeholder="your email" />
    </i-form-group>
    <i-form-group>
      <i-textarea v-model="inquiry" placeholder="your inquiry here..." />
    </i-form-group>
    <i-form-group>
      <i-button color="facebook" block>
        Submit
      </i-button>
    </i-form-group>
  </i-form>
</template>
