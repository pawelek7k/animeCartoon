<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Loader from '../components/Loader.vue'

const data = ref<any>(null)
const loading = ref(true)
const route = useRoute()
const mal_id = route.params.id

const fetchData = async () => {
  loading.value = true
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${mal_id}`)
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
    <div v-if="loading"><Loader /></div>
    <div v-else>
      <div
        class="image-details-background"
        :style="{
          backgroundImage: `linear-gradient(to right, #ddd, #fffa), url(${data.images.jpg.large_image_url})`
        }"
      >
        <div>
          <h1>{{ data.title }}</h1>
          <img :src="data.images.jpg.image_url" :alt="data.title" />
        </div>
      </div>
      <div class="details-genres">
        <span>Genres: </span>
        <p>{{ data.genres.map((genre) => genre.name).join(', ') }}</p>
      </div>
      <div class="details-rating-ep">
        <p><span>Score: </span> {{ data.score }}</p>
        <p><span>Episodes: </span> {{ data.episodes }}</p>
      </div>
      <p>{{ data.synopsis }}</p>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 4rem;
}

h1 {
  font-size: 2.5rem;
  font-family: 'Trade Winds', system-ui;
  margin-bottom: 2rem;
}

.image-details-background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 2rem 0rem;
  border-bottom: thin solid #fff;
  border-right: thin solid #fff;
}

.image-details-background > div {
  width: 100%;
  padding: 3rem;
  height: 100%;
  backdrop-filter: blur(10px);
}

.details-rating-ep {
  display: flex;
  gap: 6rem;
  font-weight: 600;
}

.details-genres span {
  font-weight: 600;
}

.details-genres {
  display: flex;
}
</style>
