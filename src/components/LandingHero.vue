<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

const slides = ref<Array<{ img: string; title: string }>>([])

onMounted(() => {
  fetch('/data/hero.json')
    .then((response) => response.json())
    .then((data) => {
      slides.value = data
    })
    .catch((error) => {
      console.error('Error fetching the data:', error)
    })
})
</script>

<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :modules="[Autoplay]"
    class="mySwiper"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <h1>{{ slide.title }}</h1>
      <section
        :style="{
          backgroundImage: `linear-gradient(0deg, rgba(10,12,16,1) 0%, rgba(0,0,0,0.47942927170868344) 100%), url(${slide.img})`
        }"
      ></section>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}

h1 {
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
</style>
