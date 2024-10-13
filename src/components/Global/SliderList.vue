<script setup lang="ts">
import type { Anime } from '@/types/Anime'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useRouter } from 'vue-router'
import AnimeList from './AnimeList.vue'

const router = useRouter()

const { data } = defineProps<{
  data: Anime[]
}>()

const handleSlideClick = (id: number) => {
  router.push(`/anime/${id}`)
}
</script>

<template>
  <swiper
    v-if="data"
    :slides-per-view="1"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :space-between="20"
    :breakpoints="{
      320: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 1, spaceBetween: 20 },
      640: { slidesPerView: 2, spaceBetween: 30 },
      768: { slidesPerView: 3, spaceBetween: 40 },
      1024: { slidesPerView: 4, spaceBetween: 40 },
      1350: { slidesPerView: 4, spaceBetween: 40 },
      1550: { slidesPerView: 5, spaceBetween: 40 }
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      v-for="anime in data"
      :key="anime.mal_id"
      class="anime-item"
      @click="handleSlideClick(anime.mal_id)"
    >
      <AnimeList :data="anime" />
    </swiper-slide>
  </swiper>
</template>
