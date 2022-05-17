<script setup>
const props = defineProps({
  text: {
    type: Boolean,
  },
  ghost: {
    type: Boolean,
  },
  block: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  type: {
    type: String,
    validator(value) {
      return ['default', 'primary', 'success', 'info', 'warning', 'error'].includes(value)
    },
  },
})
const { text, disabled, ghost, block, bordered, loading, type } = toRefs(props)
const computedClasses = computed(() => {
  return {
    'border-1 rounded': unref(bordered),
    '!border-none': !unref(bordered),
    'px-3 py-2 mx-1 min-w-16 text-sm hover:shadow': true,
    'block': unref(block),
    'bg-blue-600 border-blue-600': unref(type) === 'primary',
    'bg-gray-600 border-gray-600': unref(type) === 'info',
    '!bg-none': unref(ghost),
  }
})
</script>

<template>
  <button :class="computedClasses">
    <slot />
  </button>
</template>
