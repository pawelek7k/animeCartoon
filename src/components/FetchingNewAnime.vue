<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import 'swiper/css'
import Loader from './Loader.vue'
import AnimeList from './AnimeList.vue'

const data = ref<any>(null)
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
  <section>
    <div class="line-container">
      <hr />
    </div>
    <h2 class="heading-section">New anime seasons:</h2>
    <div v-if="loading"><Loader /></div>
    <AnimeList :data="data" />
  </section>
</template>
<style scoped>
section {
  padding: 2rem 4rem;
}

.heading-section {
  font-size: 2.5rem;
  font-family: 'Trade Winds', system-ui;
  margin-bottom: 2rem;
}

hr {
  border: thin solid var(--secondary);
  width: 40%;
}

.line-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>
