<script setup>
const active = ref('HSK-1 ~ HSK6')
const tabs = [
  'HSK-1 ~ HSK6',
  'Customized Courses',
  'Business Chinese',
]
useHead({
  title: 'Online Class',
})
</script>

<template>
  <div p="x-6 t-8" select="none">
    <nav class="tab-header">
      <button
        v-for="tab of tabs" :key="tab"
        :class="{ 'active-tab': active === tab }"
        p="x-3 y-1"
        :text="active === tab ? 'gray-700' : 'gray-400'"
        border
        @click="active = tab"
      >
        {{ tab }}
      </button>
    </nav>
    <section v-show="active === 'HSK-1 ~ HSK6'" min="h-screen">
      <div class="flex-grow overflow-y-auto">
        <article class="prose pt-10 prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
          <h1>HSK Test Preparation Courses</h1>
          <p>
            Chinese proficiency test (HSK) is an international standardized test, which focuses on the ability of non
            first language candidates to use Chinese for communication in their life, study and work.
          </p>
          <p>
            Chinese proficiency test (HSK) includes six levels:
            <NuxtLink to="/hsk/hsk1" class="link">
              HSK (level 1)
            </NuxtLink>,
            <NuxtLink to="/hsk/hsk2" class="link">
              HSK (level 2)
            </NuxtLink>,
            <NuxtLink to="/hsk/hsk3" class="link">
              HSK (level 3)
            </NuxtLink>,
            <NuxtLink to="/hsk/hsk4" class="link">
              HSK (level 4)
            </NuxtLink>,
            <NuxtLink to="/hsk/hsk5" class="link">
              HSK (level 5)
            </NuxtLink> and
            <NuxtLink to="/hsk/hsk6" class="link">
              HSK (level 6)
            </NuxtLink>,
            with HSK (level 6) as the highest level.Candidates who pass HSK (level
            6）can easily understand the Chinese information they hear or read, and express their opinions fluently while
            speaking or writing.
          </p>

          <p>
            If you would like to combine your Mandarin study with a focus on HSK tests for achieving high scores, then
            this
            course is ideal for you. In our HSK classes you will:
          </p>
          <ul>
            <li>
              follow HSK tests oriented coursebooks with specifically tailored materials to suit your current Chinese
              level
              and needs
            </li>
            <li>
              receive professional advice and practical tips from our expert teachers about getting better scores from
              the
              tests
            </li>
            <li>
              practice words and grammar specific to the tests with a focus on the common mistakes that are often made
              by
              Mandarin learners
            </li>
            <li>
              have access to our Study Center-HSK Flashcards system, HSK vocabulary characters writing practice and mock
              HSK
              tests.
            </li>
          </ul>
        </article>
      </div>
    </section>
    <section v-show="active === 'Customized Courses'" min="h-screen">
      <UnderConstruction />
    </section>
    <section v-show="active === 'Business Chinese'" min="h-screen">
      <UnderConstruction />
    </section>
  </div>
</template>

<style scoped>
</style>
