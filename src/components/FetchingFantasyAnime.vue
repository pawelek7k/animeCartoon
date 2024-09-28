<script setup lang="ts">
import axios from 'axios'
import 'swiper/css'
import { onMounted, ref } from 'vue'
import AnimeList from './AnimeList.vue'
import Loader from './Loader.vue'

const fantasyData = ref<any>(null)
const loading = ref(true)

const fetchFantasyData = async () => {
  loading.value = true
  try {
    const response = await axios.get('https://api.jikan.moe/v4/anime', {
      params: {
        genres: 10
      }
    })
    console.log(response.data.data)
    fantasyData.value = response.data.data
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchFantasyData()
})
</script>

<template>
  <section>
    <div class="line-container">
      <hr />
    </div>
    <div class="text-container">
      <h2 class="heading-section">Fantasy word!</h2>
    </div>
    <div v-if="loading"><Loader /></div>
    <AnimeList :data="fantasyData" />
  </section>
</template>

<style scoped>
section {
  padding: 2rem 4rem;
}

.text-container {
  margin-bottom: 2rem;
}

.heading-section {
  font-size: 2.5rem;
  font-family: 'Trade Winds', system-ui;
}

hr {
  border: thin solid var(--secondary);
  width: 20%;
}

.line-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>
