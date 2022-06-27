<script setup>
defineProps({
  modelValue: {
    type: [String, Number, Object],
  },
  items: {
    type: Array,
    default: () => [],
  },
  itemValue: {
    type: String,
    default: 'value',
  },
  itemText: {
    type: String,
    default: 'text',
  },
})
const emits = defineEmits(['update:modelValue'])

const [show, toggle] = useToggle()
function handleClickTrigger() {
  toggle()
}
function handleOptionSelected(item, value) {
  emits('update:modelValue', value)
  toggle()
}
const trigger = ref()
const { width, height, right, top, left, bottom } = useElementBounding(trigger)
const { width: windowWidth, height: windowHeight } = useWindowSize()
</script>

<template>
  <button
    ref="trigger"
    text="gray-500 base" font="normal" outline="none" border="none"
    cursor="pointer"
    flex="~"
    items="center"
    capitalize
    @click="handleClickTrigger"
  >
    {{ items.find(it => it[itemValue] === modelValue)?.[itemText] }}
    <i inline-block i-carbon-caret-down />
  </button>
  <ul
    v-show="show"
    fixed="~"
    :style="{
      top: `${bottom + 10}px`,
      right: `${right > windowWidth ? 0 : windowWidth - right}px`,
    }"
    bg="white"
    shadow="lg"
    p="x-6 y-2"
    border="~ light-500"
    rounded="~"
  >
    <li
      v-for="option of items" :key="option[itemValue]"
      p="y-1"
      font="base"
      text="gray-600 hover:blue-500"
      cursor="pointer"
      capitalize
      @click="handleOptionSelected(option, option[itemValue])"
    >
      {{ option[itemText] }}
    </li>
  </ul>
</template>
