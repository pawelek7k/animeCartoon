<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
const data = ref<any>(null)
const loading = ref(true)

const fetchData = async () => {
  loading.value = true
  try {
    const response = await axios.get('https://api.jikan.moe/v4/genres/anime')
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
  <ul>
    <li v-for="genre in data" :key="genre.mal_id">
      <span class="first-letter">{{ genre.name.charAt(0) }}</span
      ><span>{{ genre.name.slice(1) }}</span>
    </li>
  </ul>
</template>

<style scoped></style>
