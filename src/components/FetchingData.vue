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
    <ul>
      <li v-for="anime in data" :key="anime.mal_id">
        {{ anime.title }}
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
