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
  <section>
    <h1>{{ title }}</h1>
  </section>
</template>

<style scoped>
section {
  background-image: url('../../images/headerImage.gif');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 2rem;
  margin: 4rem 1rem 1rem 1rem;
  padding: 4rem;
  text-align: center;
}

h1 {
  color: #ddd;
  font-size: 3rem;
  font-family: 'Trade Winds', system-ui;
}
</style>
