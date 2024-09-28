<script setup lang="ts">
import axios from 'axios'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted, ref } from 'vue'

import 'swiper/css'
import 'swiper/css/autoplay'

const data = ref<any[]>([])
const loading = ref(true)

const fetchData = async () => {
  loading.value = true
  try {
    const response = await axios.get('https://api.jikan.moe/v4/seasons/now')
    console.log(response.data.data)
    data.value = response.data.data
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div v-if="loading">Loading...</div>
  <swiper
    v-else
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :modules="[Autoplay]"
    class="mySwiper"
  >
    <swiper-slide v-for="(slide, index) in data" :key="index">
      <section
        :style="{
          backgroundImage: `linear-gradient(0deg, rgba(10,12,16,1) 0%, rgba(0,0,0,0.5) 100%), url(${slide.trailer.images.maximum_image_url})`
        }"
      >
        <h1>{{ slide.title_japanese }}</h1>
        <h2>{{ slide.title }}</h2>
      </section>
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
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
