<script setup lang="ts">
import FirstAnimeCover from '@/components/FirstAnimeCover.vue'
import FetchingNewAnime from '../components/FetchingNewAnime.vue'
import FetchingPopularAnime from '../components/FetchingPopularAnime.vue'
import LandingHero from '../components/LandingHero.vue'
</script>

<template>
  <main>
    <LandingHero />
    <FetchingPopularAnime />
    <FirstAnimeCover />
    <FetchingNewAnime />
  </main>
</template>

<style scoped>
main {
  padding: 0rem 0rem 0rem 3rem;
}
</style>
