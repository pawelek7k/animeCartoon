<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'
import SliderList from '../Global/SliderList.vue'

interface Genre {
  mal_id: number
  name: string
}

const props = defineProps<{
  genres: Genre[]
}>()

const moreLikeThis = ref<any[]>([])

const fetchMoreLikeThis = async (genres: Genre[]) => {
  if (!genres.length) return

  try {
    const genreId = genres[0].mal_id
    const response = await axios.get(`https://api.jikan.moe/v4/anime?genres=${genreId}`)
    moreLikeThis.value = response.data.data
  } catch (error) {
    console.error('Error fetching more-like-this data:', error)
  }
}

watch(
  () => props.genres,
  (newGenres) => {
    fetchMoreLikeThis(newGenres)
  }
)

onMounted(() => {
  fetchMoreLikeThis(props.genres)
})
</script>

<template>
  <div>
    <div class="text-container">
      <h2>More like this!</h2>
      <p>You want to see something similar?</p>
    </div>
    <div v-if="moreLikeThis.length">
      <SliderList :data="moreLikeThis" />
    </div>
    <div v-else>
      <p>No similar anime found.</p>
    </div>
  </div>
</template>

<style scoped>
.text-container {
  margin: 2rem 0rem;
}

h2 {
  font-size: 2rem;
  font-family: 'Trade Winds', system-ui;
}

p {
  color: var(--text-accent);
  font-size: 0.9rem;
  text-transform: uppercase;
}
</style>
