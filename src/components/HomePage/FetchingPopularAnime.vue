<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import Loader from '../Global/LoaderSpinner.vue'
import SliderList from '../Global/SliderList.vue'

const data = ref<any>(null)
const loading = ref(true)

const fetchData = async () => {
  loading.value = true
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime')
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
    <div class="line-container">
      <hr />
    </div>
    <div class="text-container">
      <h2 class="heading-section">The most popular anime:</h2>
      <p>Maybe we can watch it again?</p>
    </div>
    <div v-if="loading"><Loader /></div>
    <div>
      <SliderList :data="data" />
    </div>
    <div class="line-container second-line">
      <hr />
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 2rem 4rem;
}

.text-container {
  margin-bottom: 2rem;
}

.text-container p {
  color: var(--text-accent);
  font-size: 0.9rem;
  text-transform: uppercase;
}

.heading-section {
  font-size: 2.5rem;
  font-family: 'Trade Winds', system-ui;
}

hr {
  border: thin solid var(--secondary);
  width: 50%;
}

.second-line {
  margin-top: 2rem;
}

.second-line hr {
  width: 40%;
}

.line-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

@media (max-width: 800px) {
  .second-line {
    display: none;
  }
}
</style>
