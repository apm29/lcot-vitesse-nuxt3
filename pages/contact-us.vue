<script setup lang="ts">
const route = useRoute()
const { ContactTypes } = useContact()
</script>

<template>
  <div
    class="contact-us-page"
    from-dark-800
    to-sky-400
    min-h-screen
    p="b-48 t-12 x-4"
    overflow="hidden"
    flex
    flex-col
    items-center
    justify-center
    bg-gradient-to-tl
    transition="all 0.3s ease-in-out"
    relative
  >
    <div
      absolute
      top="-45rem"
      left="-45rem"
      overflow="visible"
      rounded-full
      bg="yellow-500/30"
      w-64rem
      h-64rem
    />
    <div
      absolute
      top="50%"
      right="-100rem"
      overflow="visible"
      rounded-full
      bg="lime-500/30"
      w-128rem
      h-128rem
    />
    <div
      absolute
      top="-12"
      right="-12"
      overflow="visible"
      rounded-full
      bg="orange-500/30"
      w-18rem
      h-18rem
    />
    <div
      absolute
      top="80vh"
      right="-70rem"
      overflow="visible"
      rounded-full
      bg="red-500/30"
      w-196rem
      h-196rem
    />
    <h1 text="white !3xl center" font="bold" m="b-6" z="30">
      Contact Us
    </h1>

    <div v-if="route.query.type === ContactTypes.ONE_ON_ONE_CLASS" m="b-3" z="30">
      <h2 text="white lg center" font="bold" m="b-3">
        Online Chinese Class with Private Teachers
      </h2>
      <h5 text="white center">
        Want to study Chinese courses online with a private tutor ? We have French/Spanish/English teachers, they are all our star teachers who made our students' favorite Chinese lessons. Now you can take 1-on-1 online class with any of those tutors to help you study and speak Mandarin Chinese better.
        Our teachers' classes can be taught one on one via Skype or WeChat. All lessons can proceed at your schedule time and your own pace.
        Send us a message to schedule your private lessons or ask for more information.
      </h5>
    </div>
    <h2 v-else text="white lg center" font="bold" m="b-3" z="30">
      Get in touch with our team to discuss your plan.
    </h2>
    <ContactForm :dark="false" />
  </div>
</template>
