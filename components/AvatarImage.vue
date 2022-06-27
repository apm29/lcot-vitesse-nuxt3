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
  <div v-if="isLoading" class="loading">
    <span class="loading-text">Loading</span>
  </div>
  <img v-else :src="src" v-bind="$attrs">
</template>

<style scoped>
.loading {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: #d3d3d3;
  background-color: #ededed;
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    #ededed;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
}

@keyframes loading {
  to {
    background-position-x: -20%;
  }
}

.loading-text::after {
  content: "";
  align-items: center;
  right: 0%;
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
