<script setup lang="ts">
import MoreLikeThis from '@/components/AnimeDetails/MoreLikeThis.vue'
import RenderDetails from '@/components/AnimeDetails/RenderDetails.vue'
import AdvertisingContent from '@/components/Global/AdvertisingContent.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Loader from '../components/Global/LoaderSpinner.vue'

const data = ref<any>(null)
const loading = ref(true)
const route = useRoute()
const moreLikeThis = ref<any[]>([])
const mal_id = route.params.id

const fetchData = async () => {
  loading.value = true
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${mal_id}`)
    console.log(response.data.data)
    data.value = response.data.data
    fetchMoreLikeThis(data.value.genres)
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    loading.value = false
  }
}

const fetchMoreLikeThis = async (genres: any[]) => {
  if (!genres.length) return

  try {
    const genreId = genres[0].mal_id
    const response = await axios.get(`https://api.jikan.moe/v4/anime?genres=${genreId}`)
    moreLikeThis.value = response.data.data
  } catch (error) {
    console.error('Error fetching more-like-this data:', error)
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
      <div>
        <div class="details-container">
          <RenderDetails :data="data" />
          <div class="ad">
            <AdvertisingContent />
          </div>
          <div class="more-like-this">
            <MoreLikeThis :genres="data.genres" />
          </div>
        </div>
      </div>
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

@media (max-width: 800px) {
  h1 {
    font-size: 1.5rem;
  }
}

.details-container {
  padding: 2rem;
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

@media (max-width: 800px) {
  section {
    padding: 0rem;
  }
}
</style>
