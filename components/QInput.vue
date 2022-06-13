<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
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

const placeholderColor = computed(() => {
  return !props.dark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(41, 34, 34, 0.8)'
})
</script>

<template>
  <input
    v-if="type === 'text'"
    style=" backdrop-filter: blur(8px) !important"
    :model-value="modelValue"
    v-bind="$attrs"
    bg-light-400 border border-gray-300 bg-opacity-50 rounded p-2
    focus:outline-2 focus:outline-blue-700 focus:border-none
    @update:modelValue="$emit('update:modelValue', $event)"
  >
  <textarea
    v-if="type === 'textarea'"
    style=" backdrop-filter: blur(8px) !important"
    :model-value="modelValue"
    v-bind="$attrs"
    bg-light-400 border border-gray-300 bg-opacity-50 rounded p-2
    focus:outline-2 focus:outline-blue-700 focus:border-none
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<style scoped>
input::placeholder {
  color:v-bind(placeholderColor);
}

textarea::placeholder {
  color:v-bind(placeholderColor);
}
</style>
