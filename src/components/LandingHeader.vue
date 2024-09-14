<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const title = ref<string>('Welcome in AnimeCartoon!')
const titles = ['Welcome in AnimeCartoon!', 'Now, take a look around us!']
let currentIndex = 0
let intervalId: number | undefined

const changeTitle = () => {
  currentIndex = (currentIndex + 1) % titles.length
  title.value = titles[currentIndex]
}

onMounted(() => {
  intervalId = setInterval(changeTitle, 3000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<style scoped>
header {
  background-image: url('../../images/headerImage.gif');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 2rem;
  margin: 1rem;
  padding: 2rem;
  text-align: center;
  border-bottom: 2px solid #ddd;
}

h1 {
  color: #ddd;
  font-size: 3rem;
  font-family: 'Trade Winds', system-ui;
}
</style>
