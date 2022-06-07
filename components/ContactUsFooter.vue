<script setup>
</script>

<template>
  <div
    text="sm gray4"
    p="y-3"
    flex
    flex-col
    justify-center
    items-center
  >
    <!-- 联系我们 -->
    <a target="_self" href="mailto:409308758@qq.com">
      <i class="i-mdi-email" />
      <span>409308758@qq.com</span>
    </a>
    <a target="_blank" href="https://wx.qq.com/">
      <i class="i-mdi-wechat" />
      <span>theworldofRebecca</span>
    </a>
    <a target="_self" href="skype:+8618814816658?chat">
      <i class="i-mdi-skype" />
      <span>+8618814816658</span>
    </a>
    <a target="_blank" href="https://gaode.com/search?query=%E6%95%99%E5%B7%A5%E8%B7%AF198%E5%8F%B7&city=330400&geoobj=120.365094%7C30.480729%7C121.516473%7C31.074257&zoom=10.21">
      <i class="i-mdi-map-marker" />
      <span>No198,jiaogong road,west lake district hangzhou,zhejiang,China.</span>
    </a>
    <a target="_self" href="tel:+8618814816658">
      <i class="i-mdi-phone" />
      <span>24-hour courses line: +8618814816658(English)</span>
    </a>
  </div>
</template>

<style scoped>
i {
  @apply  inline-block ;
}
a {
  @apply flex items-center gap-1 hover:text-blue-800;
}
</style>
