<script setup lang="ts">
import { ref, onMounted } from 'vue'

const anime = ref<Array<{ img: string; title: string; description: string }>>([])

onMounted(() => {
  fetch('/data/anime.json')
    .then((response) => response.json())
    .then((data) => {
      anime.value = data
    })
    .catch((error) => {
      console.error('Error fetching the data:', error)
    })
})
</script>

<template>
  <section v-if="anime.length">
    <img :src="anime[0].img" alt="anime cover" />
    <div>
      <h2>{{ anime[0].title }}</h2>
      <p>{{ anime[0].description }}</p>
    </div>
  </section>
</template>

<style scoped></style>
