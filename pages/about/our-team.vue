<script setup>
useHead({
  title: 'Our Team',
})

definePageMeta({
  pageTransition: { name: "fade", mode: "out-in" },
});
</script>

<template>
  <div p-4 min="h-screen">
    <article class="prose">
      <h1>Rebecca Yang <small>(English<i i-twemoji-flag-united-kingdom />)</small></h1>
      <p>
        Hello everyone, it ‘s a pleasure to have friends from afar.Confucius sent out such an invitation as early as
        2500
        years ago.Today i still want to follow the teachings from Confucius and give you a warm welcome to my website!
        My name is Rebecca Yang, i am always wondering when i was 80,how do the people call me ?Perhaps they will call
        me
        Old Yang(Young).Alright,I was majoyed in Chinese language and literature at college. I am a teacher with 4 years
        experience of teaching Chinese,besides, I used to be an English tour guide during last 6 years , i loved to
        share
        culture with the people from all over the world. I am a patience,outgoing and friendly people ,have a strong
        passion in teaching Chinese as a second language on tour.
        In my class during the tour,you are not only learn classic Chinese courses,but also enjoy a lot interesting
        stories and culture about real China ,in between i would like to be the voice for you of China. Come on ,looking
        forward to seeing you !
      </p>
      <img src="/team/pic01.png" alt="Rebecca Yang">
      <h1>Keran Li <small>(French<i i-twemoji-flag-france />)</small></h1>
      <p>
        Bonjour tout le monde,
        Je suis Keran Li, maintenant je suis enseignante chez Rebecca Yang Studio. J'ai étudié à Nantes en France
        pendant
        deux ans, ma spécialité est Didactique des langues. J’ai encore l’expérience de travail en Côte d’Ivoire. Depuis
        2019, j'ai 2 ans d'expérience dans l'enseignement du chinois. Deux années d'expériene d’'enseignement m'a permis
        de découvrir la diversité culturelle. Si vous voulez mieux comprendre la culture chinoise, veuillez me suivre
        pour
        apprendre le chinois!
        J'aime beaucoup voyager, j'espère que notre enseignement est immersif, afin que vous puissiez ressentir la joie
        d'apprendre le chinois pendant le voyage. Nous pouvons vous permettre d'apprendre le chinois plus intéressant en
        voyageant.
      </p>
      <img src="/team/pic02.png" alt="Keran Li">
      <h1>Ailu <small>(Spanish<i i-twemoji-flag-spain />)</small></h1>
      <p>
        Hola todos, me llamo Ailu. Soy de Chengdu, el pueblo de Oso Panda. Ahora trabajo con Rebeca Yang a fin de
        propagar
        la belleza china, incluida el idioma y la cultura tradicional. Me gusta mucho la cultura china. Así que cuando
        estudiaba el master de educación en España, enseñaba chino y la danza tradicional china en algunas escuelas de
        chino en los fines de semana. En las clases de chino y de danza, poco a poco acumulé muchas experiencias de
        enseñanza (de español a chino). Después de volver de España, trabajé como maestra de español en escuelas de
        idiomas extranjeros en China. Esta vez gané la experiencia de enseñanza de chino a español. Hasta ahora, sé las
        claves de enseñanza entre estos idiomas y cómo explicar con una manera fácil, directa y entendida. El lenguaje
        nunca es el final, la comunicación es el objetivo. Cuando viajaba por Europa, podía comunicar bien con la gente
        de
        varios países con diferentes culturas, aunque yo no hablé bien inglés. Acompañaba muchas veces a mis amigos
        extranjeros a los sitios turísticos en Hangzhou. Paseando por las montañas, el lago, los templos y los ríos,
        escuchando el lenguaje dialecto, sintiendo el ambiente local, es la forma más útil de aprender idioma. Vengan
        amigos y amigas, aprended chino con nosotros. Aprended chino con viajes.
      </p>
      <img src="/team/pic03.png" alt="Ailu">
      <h1>Monica <small>(English<i i-twemoji-flag-united-kingdom />)</small></h1>
      <p>
        Monica
        Hey, how are you? I'm Monica. I'm working in Rebecca Yang Studio now. Nice to meet you here. I majored in
        English And Chinese Education in college and have 5 years of online teaching experience. I'm good at
        communicating with students. Also have years of oral practical experience. Speaking like native speakers and
        Participating in hosting activities, English speech competitions and stage performances. In my class, it not
        only contains vocabulary and grammar, but also how to communicate with excellent expressive communication
        skills. I like traveling, I hope our teaching is experiential immersive teaching and have due with learning
        Chinese during travel.
      </p>
      <img src="/team/pic04.png" alt="Monica">
      <h1>Ling <small>(English<i i-twemoji-flag-united-kingdom />)</small></h1>
      <p>
        Hello, everyone ! I'm Ling.“Adhere to the pure ideal of your youth,Keeping your warm heart ready and being young
        forever.”This is my motto.I'm working in Rebecca Yang Studio now.I am a tour guide and team leader since 2015 ,
        I have been engaged in tour guide work continuously, because I firmly believe that I can meet many beautiful
        people during travel. i had won the first prize of the national tour guide competition, excellent graduates of
        Zhejiang Province and other honors. Meanwhile also worked as an on-site teaching teacher for cadre training of
        Zhejiang University for 3 years. I am fluent in English, good at online teaching.Cheerful and lively, honest and
        modest are my attitude during my lessons, i love kids very much ,they are lovely angels ! I like traveling，I
        hope our teaching is experiential immersion teaching. It's fun to learn Chinese during traveling.
      </p>
      <img src="/team/pic05.png" alt="Ling">
      <h1>Drizzle <small>(English<i i-twemoji-flag-united-kingdom />)</small></h1>
      <p>
        Hey，I’m Drizzle,and working in Rebecca Yang Studio now.Nice to meet you at here.I majored International Chinese
        Education and have 4 years of online and offline teaching experience. In addition to learning authentic Chinese
        expressions with me, you also can learn a lot of interesting Chinese culture.I love traveling with people from
        all over the world,and hope we meet at here, exchange different interesting cultures, help you to fall in love
        with and speak Chinese well.
      </p>
      <img src="/team/pic06.png" alt="Drizzle">
    </article>
  </div>
</template>

<style scoped>
p {
  @apply indent-xl mb-6 px-6;
}

h1 {
  @apply my-4 text-2xl px-6;
  font-family: 'Chinyen', cursive;
}
small {
  @apply text-base;
}
p,h1 {
  @apply px-4;
}

small i {
  @apply inline-block;
}
</style>
