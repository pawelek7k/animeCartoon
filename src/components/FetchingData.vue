<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref<any>(null)
const loading = ref(true)

const fetchData = async () => {
  loading.value = true
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime')
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
  <section>
    <h1>The most popular anime:</h1>
    <m-loading v-if="loading" />
    <ul class="anime-list">
      <li v-for="anime in data" :key="anime.mal_id" class="anime-item">
        <img :src="anime.images.jpg.image_url" :alt="anime.title" />
        <h3 class="anime-heading">{{ anime.title }}</h3>
        <p>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="10" width="11.25" viewBox="0 0 576 512">
              <path
                fill="#FFD43B"
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg> </span
          >{{ anime.score }}
        </p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.anime-list {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}

.anime-item {
  width: 225px;
  height: 360px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.anime-item > p {
  display: flex;
  gap: 0.3rem;
  align-items: center;
}

.anime-heading {
  font-size: 0.9rem;
}
</style>
