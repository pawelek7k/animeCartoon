<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import AnimeList from './AnimeList.vue'
import Loader from './Loader.vue'

const newSeasonData = ref<any>(null)
const loading = ref(true)

const fetchNewSeasonAnime = async () => {
  loading.value = true
  try {
    const response = await axios.get('https://api.jikan.moe/v4/seasons/now')
    newSeasonData.value = response.data.data
  } catch (error) {
    console.error('Error fetching new season data:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchNewSeasonAnime()
})
</script>
<template>
  <section>
    <div class="line-container">
      <hr />
    </div>
    <div class="text-container">
      <h2 class="heading-section">New anime seasons:</h2>
      <p>Start your binge before the new season begins!</p>
    </div>
    <div v-if="loading"><Loader /></div>
    <AnimeList v-else :data="newSeasonData" />
  </section>
</template>
<style scoped>
section {
  padding: 2rem 4rem;
}

.text-container {
  margin-bottom: 2rem;
}

.text-container p {
  color: var(--text-accent);
  font-size: 0.9rem;
  text-transform: uppercase;
}

.heading-section {
  font-size: 2.5rem;
  font-family: 'Trade Winds', system-ui;
}

hr {
  border: thin solid var(--secondary);
  width: 30%;
}

.line-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>
