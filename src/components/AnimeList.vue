<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import { useRouter } from 'vue-router'
import 'swiper/css'
import { Swiper } from 'swiper/vue'

const router = useRouter()

interface Anime {
  mal_id: number
  title: string
  episodes: number
  score: number
  images: {
    jpg: {
      large_image_url: string
    }
  }
  genres: { mal_id: number; name: string }[]
}

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
      640: { slidesPerView: 2, spaceBetween: 30 },
      768: { slidesPerView: 3, spaceBetween: 40 },
      1024: { slidesPerView: 5, spaceBetween: 40 }
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
      <div class="anime-slide-content">
        <img :src="anime.images.jpg.large_image_url" :alt="anime.title" class="anime-image" />
        <div class="anime-info">
          <p><span class="info-span">Episodes:</span>{{ anime.episodes }}</p>
          <div class="genres-container">
            <span class="info-span">Genres:</span>
            <ul class="genre-list">
              <li
                v-for="(genre, index) in anime.genres"
                :key="genre.mal_id"
                class="genre-item"
                :class="{ 'last-item': index === anime.genres.length - 1 }"
              >
                {{ genre.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="anime-heading">{{ anime.title }}</h3>
      <p>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" height="10" width="11.25" viewBox="0 0 576 512">
            <path
              fill="#FFD43B"
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            />
          </svg>
        </span>
        {{ anime.score }}
      </p>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.genre-list {
  display: flex;
  list-style: none;
  gap: 10px;
  flex-wrap: wrap;
}

.anime-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  display: inline-block;
  position: relative;
  margin-right: 10px;
}

.anime-item > p {
  display: flex;
  gap: 0.3rem;
  align-items: center;
}

.anime-image {
  width: 250px;
  height: 370px;
  overflow: hidden;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.anime-info > p {
  display: flex;
  gap: 10px;
}

.genres-container {
  display: flex;
  gap: 10px;
}

.info-span {
  font-weight: bolder;
}

.genre-item::after {
  content: '•';
  margin-left: 10px;
}

.genre-item.last-item::after {
  content: '';
}

.anime-heading {
  font-size: 0.9rem;
}

.anime-slide-content {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.anime-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 256px;
  background-color: #000a;
  backdrop-filter: blur(5px);
  color: white;
  border-top: thin solid var(--accent);
  padding: 10px;
  font-size: 14px;
  transform: translateY(100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.anime-slide-content:hover .anime-info {
  transform: translateY(0%);
}

.anime-slide-content:hover .anime-image {
  transform: scale(1.05);
}
</style>
