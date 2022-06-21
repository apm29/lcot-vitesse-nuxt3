<script setup>
import { useImage } from '@vueuse/core'
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
})
const { isLoading } = useImage({ src: props.src })
</script>

<template>
  <span v-if="isLoading" class="loading">Loading</span>
  <img v-else :src="src" v-bind="$attrs">
</template>

<style scoped>
.loading {
    @apply text-gray-500 relative;
}

.loading::after {
    content: "";
    position: absolute;
    top: 0%;
    bottom: 0;
    animation: dot 3s infinite steps(3, start);
}

@keyframes dot {
    33.33% {
        content: ".";
    }
    66.67% {
        content: "..";
    }
    100% {
        content: "...";
    }
}
</style>
