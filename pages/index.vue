<script setup>
const input = ref()
const textarea = ref()
const select = ref()
const checkboxGroup = ref(['apple'])
const options = ref([
  { id: 1, label: 'Option A' },
  { id: 2, label: 'Option B' },
  { id: 3, label: 'Option C' },
])
const radioGroup = ref()
const checkbox = ref(true)
const toggle = ref(true)
const loading = ref(false)
</script>

<template>
  <div text-center>
    <DashboardPublicityFigure />
    <Logos mb-6 />
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
    <i-form>
      <i-form-group>
        <i-form-label>Input</i-form-label>
        <i-input v-model="input" placeholder="Type something.." />
      </i-form-group>

      <i-form-group>
        <i-form-label>Textarea</i-form-label>
        <i-textarea v-model="textarea" placeholder="Write a comment.." />
      </i-form-group>

      <i-form-group>
        <i-form-label>Select</i-form-label>
        <i-select v-model="select" :options="options" placeholder="Choose an option" />
      </i-form-group>

      <i-form-group>
        <i-form-label>Checkbox Group</i-form-label>
        <i-checkbox-group v-model="checkboxGroup">
          <i-checkbox value="apple">
            Apple
          </i-checkbox>
          <i-checkbox value="banana">
            Banana
          </i-checkbox>
          <i-checkbox value="strawberry">
            Strawberry
          </i-checkbox>
          <i-checkbox value="mango">
            Mango
          </i-checkbox>
        </i-checkbox-group>
      </i-form-group>

      <i-form-group>
        <i-form-label>Radio Group</i-form-label>
        <i-radio-group v-model="radioGroup">
          <i-radio value="coconut">
            Coconut
          </i-radio>
          <i-radio value="passionfruit">
            Passion fruit
          </i-radio>
          <i-radio value="apricot">
            Apricot
          </i-radio>
        </i-radio-group>
      </i-form-group>

      <i-form-group>
        <i-form-label>Toggle</i-form-label>
        <i-toggle v-model="toggle">
          I confirm this toggle
        </i-toggle>
      </i-form-group>

      <i-form-group>
        <i-form-label>Checkbox</i-form-label>
        <i-checkbox v-model="checkbox">
          I accept the terms and conditions
        </i-checkbox>
      </i-form-group>

      <i-form-group>
        <i-button type="submit" :loading="loading">
          Submit
        </i-button>
      </i-form-group>
    </i-form>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</template>
