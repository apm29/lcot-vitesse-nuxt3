<script setup>
defineProps({})
</script>

<template>
  <div>
    <VButton>123</VButton>
    <VButton bordered>
      123
    </VButton>
    <VButton text>
      123
    </VButton>
    <VButton ghost>
      123
    </VButton>
    <VButton type="primary">
      123
    </VButton>
    <VButton type="info">
      123
    </VButton>
    <VButton type="info" loading>
      123
    </VButton>
  </div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  margin: 10px;
}
</style>
