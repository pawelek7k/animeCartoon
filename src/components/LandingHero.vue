<script setup lang="ts">
import { ref, onMounted } from 'vue'

const image = ref<string>('')
const title = ref<string>('')

onMounted(() => {
  fetch('/data/hero.json')
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        image.value = data[0].img
        title.value = data[0].title
      }
    })
    .catch((error) => {
      console.error('Error fetching the data:', error)
    })
})
</script>

<template>
  <section
    :style="{
      backgroundImage: `linear-gradient(0deg, rgba(10,12,16,1) 0%, rgba(0,0,0,0.47942927170868344) 100%), url(${image})`
    }"
  >
    <h1>{{ title }}</h1>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}

h1 {
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
</style>
