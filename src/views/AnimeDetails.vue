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
      <h1>{{ data.title }}</h1>
      <span>{{ data.rating }}</span>
      <div>
        <span v-for="genre in data.genres" :key="genre.mal_id">{{ genre.name }}</span>
      </div>
      <div>
        <span>{{ data.episodes }}</span>
      </div>
      <img :src="data.images.jpg.image_url" :alt="data.title" />
      <p>{{ data.synopsis }}</p>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 3rem;
}
</style>
