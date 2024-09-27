<script setup lang="ts">
import AdvertisingContent from '@/components/AdvertisingContent.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Loader from '../components/Loader.vue'

const data = ref<any>(null)
const loading = ref(true)
const route = useRoute()
const mal_id = route.params.id
const showFullSynopsis = ref(false)

const toggleSynopsis = () => {
  showFullSynopsis.value = !showFullSynopsis.value
}

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
      <div class="details">
        <p>{{ data.rating }}</p>
        <div class="details-rating-ep">
          <p><span>Score: </span> {{ data.score }}</p>
          <p><span>Episodes: </span> {{ data.episodes }}</p>
        </div>
        <div class="btns-details">
          <ul>
            <li><PrimaryButton label="Add to watchlist" /></li>
            <li><button>Start watching</button></li>
          </ul>
        </div>
        <div class="details-genres">
          <ul>
            <li v-for="(genre, index) in data.genres" :key="index">
              <a href="">{{ genre.name }}</a>
            </li>
          </ul>
        </div>
        <div class="data-synopsis" v-if="data.synopsis" :class="{ expanded: showFullSynopsis }">
          <p>{{ data.synopsis }}</p>
          <ul>
            <li>
              <span>Studios</span>
              <span>{{ data.studios.map((studio) => studio.name).join(', ') }}</span>
            </li>
            <li>
              <span>Producers</span>
              <div>
                <span>{{ data.producers.map((producer) => producer.name).join(', ') }}</span>
              </div>
            </li>
          </ul>
          <button v-if="!showFullSynopsis" @click="toggleSynopsis">More details</button>
        </div>
      </div>
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

.data-synopsis.expanded {
  max-height: none;
}

.data-synopsis button {
  border: none;
  color: var(--text);
  bottom: 20px;
  background-color: transparent;
  text-transform: uppercase;
  border-bottom: thin solid var(--accent);
  z-index: 10;
  position: absolute;
  overflow: visible;
  cursor: pointer;
}

.btns-details ul {
  display: flex;
  list-style: none;
  gap: 3rem;
}

.btns-details button {
  cursor: pointer;
  border: none;
  padding: 1rem 2rem;
  border-radius: 2rem;
  text-transform: uppercase;
  border: thin solid var(--accent);
  background-color: var(--accent);
  font-weight: 600;
  color: var(--text);
  transition: 0.3s ease-in-out;
}

.btns-details button:hover {
  background-color: var(--secondary);
  border: thin solid var(--secondary);
}

.btns-details ul li:nth-of-type(2) button {
  background-color: transparent;
  border: thin solid var(--accent);
  color: var(--accent);
  transition: 0.3s ease-in-out;
}

.btns-details ul li:nth-of-type(2) button:hover {
  border: thin solid var(--secondary);
  color: var(--secondary);
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

.details {
  color: var(--text-accent);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.details-rating-ep {
  display: flex;
  gap: 6rem;
  font-weight: 600;
}

.details-genres ul {
  display: flex;
  list-style: none;
  gap: 1rem;
}

.details-genres li {
  border: thin solid var(--accent);
  padding: 0.2rem 0.4rem;
  border-radius: 2rem;
  transition: 250ms ease-in-out;
}

.details-genres li a {
  color: var(--text-accent);
  text-decoration: none;
}

.details-genres li:hover {
  background-color: var(--accent);
}

.details > p:first-of-type {
  font-size: 0.9rem;
}

.data-synopsis {
  width: 50%;
  font-size: 1rem;
  max-height: 5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: max-height 0.3s ease-in-out;
}

.data-synopsis li {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: thin solid var(--accent);
}

.data-synopsis li div {
  max-width: 20rem;
}
</style>
