<script setup lang="ts">
import LandingHero from '../components/LandingHero.vue'
import FetchingPopularAnime from '../components/FetchingPopularAnime.vue'
import FetchingNewAnime from '../components/FetchingNewAnime.vue'
import DataFilter from '../components/DataFilter.vue'
</script>

<template>
  <DataFilter />
  <main>
    <LandingHero />
    <FetchingPopularAnime />
    <FetchingNewAnime />
  </main>
</template>

<style scoped></style>
