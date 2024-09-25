<script setup lang="ts">
import { onMounted, ref } from 'vue'

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

<style scoped>
section {
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

h2 {
  font-size: 2.5rem;
  font-family: 'Trade Winds', system-ui;
}

p {
  font-size: 0.9rem;
}

div {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
