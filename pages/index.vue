<script setup>
useHead({
  title: 'Dashboard',
})

definePageMeta({
  pageTransition: { name: 'fade', mode: 'out-in' },
})
</script>

<template>
  <div text-center>
    <DashboardPublicityFigure />
    <div p="x-5">
      <h3 pl="5" text="2xl dark-600 left" font="bold" m="y-16">
        <i i-carbon-crowd-report text="sky-500" inline-block vertical="text-top" />
        {{ $t("Meet Our Full-time Mandarin Teachers On tour in Hangzhou") }}
      </h3>
      <DashboardTeachers />
      <h3 pl="5" text="2xl dark-600 left" font="bold" m="y-16">
        <i i-carbon-crowd-report text="sky-500" inline-block vertical="text-top" />
        {{ $t("Why Us") }}
      </h3>
      <ul class="why-us__list" text="lg left" m="b-12 x-1rem md:x-4rem" font="sans" list="disc" leading-snug>
        <li>Flexibility – you decide where and when you would like to have your class with our private Mandarin tutor.</li>
        <li>Mandarin Learning Materials – access to all of our course books and online courses.</li>
        <li>We offer the basic classes online and touch the real culture offline.</li>
        <li>
          A distinguished and experienced teachers -All of our tutors are Ministry of Teacher certified .They are all highly
          trained and experienced in organizing and teaching individuals and sharing culture for students with interests and
          love. All of them get tour guide certificate.
        </li>
        <li>
          We are a Legitimate LOCAL Chinese learning Company,lcot-hangzhou.com is fully owned and operated Hangzhou
          co-operation international education agency which is a legitimate education company licensed by the government.
        </li>
      </ul>
      <h2 text="dark-600 lg center" font="bold" m="b-3" z="30">
        Get a free One-on-One trial lesson
      </h2>
      <div m="auto" max="sm:w-24rem w-20rem">
        <ContactForm :dark="true" />
      </div>
      <div h="48" />
    </div>
  </div>
</template>
