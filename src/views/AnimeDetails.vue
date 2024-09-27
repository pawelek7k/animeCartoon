<script setup lang="ts">
import AdvertisingContent from '@/components/AdvertisingContent.vue'
import RenderDetails from '@/components/AnimeDetails/RenderDetails.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
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
      <div
        class="image-details-background"
        :style="{
          backgroundImage: `linear-gradient(to right, #0a0c10, #000a), url(${data.images.jpg.large_image_url})`
        }"
      >
        <div>
          <h1>{{ data.title }}</h1>
          <img :src="data.images.jpg.image_url" :alt="data.title" />
        </div>
      </div>
      <RenderDetails :data="data" />
      <div class="ad">
        <AdvertisingContent />
      </div>
      <div class="episodes"></div>
      <div class="more-like-this"></div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 4rem;
}

h1 {
  font-size: 3rem;
  font-family: 'Trade Winds', system-ui;
  margin-bottom: 2rem;
}

.image-details-background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 2rem 0rem;
  border-bottom: thin solid #000000;
  border-right: thin solid #000000;
}

.image-details-background > div {
  width: 100%;
  padding: 3rem;
  height: 100%;
  backdrop-filter: blur(5px);
}
</style>
