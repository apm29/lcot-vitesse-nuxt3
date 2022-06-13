<script setup>
// 1 -> News
// 2 -> Chinese Traditional Culture Course
// 3 -> Manual Experience Course
// 4 -> One Sentence A Day
// 5 -> Tongue Twisters
// 6 -> Traditional Culture
// 7 -> Spoken Chinese
</script>

<template>
  <div p="x-6" min="h-screen">
    <article class="prose pt-10 prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
      <h1>Chinese traditional culture courses</h1>
      <ModuleArticle :module="2" />
      <h1>Manual experience courses</h1>
      <ModuleArticle :module="3" />
    </article>
  </div>
</template>
