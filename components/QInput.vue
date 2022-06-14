<script setup>
const props = defineProps({
  modelValue: {
    type: String,
  },
  type: {
    type: String,
    default: 'text',
  },
  dark: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <input
    v-if="type === 'text'"
    style=" backdrop-filter: blur(8px) !important"
    :value="modelValue"
    v-bind="$attrs"
    :class="dark ? 'dark' : 'light'"
    bg-light-400 border border-gray-300 bg-opacity-50 rounded p-2
    focus:outline-2 focus:outline-blue-700 focus:border-none
    @input="$emit('update:modelValue', $event.target.value)"
  >
  <textarea
    v-if="type === 'textarea'"
    style=" backdrop-filter: blur(8px) !important"
    :value="modelValue"
    v-bind="$attrs"
    :class="dark ? 'dark' : 'light'"
    bg-light-400 border border-gray-300 bg-opacity-50 rounded p-2
    focus:outline-2 focus:outline-blue-700 focus:border-none
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
input {
  min-width: 0 !important;
}
 input.light::placeholder {
  color:white;
}

 input.dark::placeholder {
  color:gainsboro;
}

 textarea.light::placeholder {
  color:white;
}

 textarea.dark::placeholder {
  color:gainsboro;
}
</style>
