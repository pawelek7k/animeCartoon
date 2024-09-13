<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>('Welcome in AnimeCartoon!')

const changeTitle = () => {
  title.value = 'Now, take a look around us!'
}
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <m-button type="primary" @click="changeTitle">😉</m-button>
  </header>
</template>

<style scoped>
header {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #ddd;
}

h1 {
  color: #333;
  font-size: 24px;
}
</style>
