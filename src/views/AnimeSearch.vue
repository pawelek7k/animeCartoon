<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

interface Anime {
  mal_id: number
  title: string
}

const route = useRoute()
const searchQuery = ref<string>(route.query.q ? String(route.query.q) : '')
const searchResults = ref<Anime[]>([])

const fetchAnimeSearch = async () => {
  console.log('searchQuery:', searchQuery.value)
  if (searchQuery.value) {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery.value)}`
      )

      console.log('API Results:', response.data)
      searchResults.value = response.data.data || []
    } catch (error) {
      console.error('Error fetching search results', error)
    }
  }
}

onMounted(fetchAnimeSearch)
watch(
  () => route.query.q,
  (newQuery) => {
    searchQuery.value = String(newQuery || '')
    fetchAnimeSearch()
  }
)
</script>

<template>
  <main>
    <div>
      <h1>Results for "{{ searchQuery }}"</h1>
      <ul>
        <li v-if="searchResults.length === 0">No results found.</li>
        <li v-for="anime in searchResults" :key="anime.mal_id">{{ anime.title }}</li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 5rem 3rem;
}
</style>
