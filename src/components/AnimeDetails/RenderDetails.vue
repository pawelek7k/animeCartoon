<script setup lang="ts">
import { ref } from 'vue'
import PrimaryButton from '../Global/PrimaryButton.vue'
import SecondaryButton from '../Global/SecondaryButton.vue'

interface DataProps {
  rating: string
  title: string
  score: number
  episodes: number
  genres: Array<{ name: string }>
  synopsis: string
  studios: Array<{ name: string }>
  producers: Array<{ name: string }>
}

const props = defineProps<{ data: DataProps }>()

const showFullSynopsis = ref(false)

const toggleSynopsis = () => {
  showFullSynopsis.value = !showFullSynopsis.value
}
</script>

<template>
  <div class="details">
    <p>{{ props.data.rating }}</p>
    <div class="details-rating-ep">
      <p><span>Score: </span> {{ props.data.score }}</p>
      <p><span>Episodes: </span> {{ data.episodes }}</p>
    </div>
    <div class="btns-details">
      <ul>
        <li><PrimaryButton label="Add to watchlist" /></li>
        <li><SecondaryButton label="Start watching" /></li>
      </ul>
    </div>
    <div class="details-genres">
      <ul>
        <li v-for="(genre, index) in props.data.genres" :key="index">
          <a href="">{{ genre.name }}</a>
        </li>
      </ul>
    </div>
    <div class="data-synopsis" v-if="data.synopsis" :class="{ expanded: showFullSynopsis }">
      <p>{{ props.data.synopsis }}</p>
      <ul>
        <li>
          <span>Studios</span>
          <span>{{ props.data.studios.map((studio) => studio.name).join(', ') }}</span>
        </li>
        <li>
          <span>Producers</span>
          <div>
            <span>{{ props.data.producers.map((producer) => producer.name).join(', ') }}</span>
          </div>
        </li>
      </ul>
      <button v-if="!showFullSynopsis" @click="toggleSynopsis">More details</button>
    </div>
  </div>
</template>

<style scoped>
.data-synopsis.expanded {
  max-height: none;
}

.data-synopsis button {
  border: none;
  color: var(--text);
  bottom: -40px;
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

.details {
  color: var(--text-accent);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 5rem;
  position: relative;
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

@media (max-width: 1000px) {
  .data-synopsis {
    width: 100%;
  }
}
@media (max-width: 800px) {
  .btns-details ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .details-rating-ep {
    justify-content: center;
  }
}
</style>
