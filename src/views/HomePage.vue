<script setup lang="ts">
import PrivacyModal from '@/components/Global/PrivacyModal.vue'
import FirstAnimeCover from '@/components/HomePage/FirstAnimeCover.vue'
import FetchingNewAnime from '../components/HomePage/FetchingNewAnime.vue'
import FetchingPopularAnime from '../components/HomePage/FetchingPopularAnime.vue'
import LandingHero from '../components/HomePage/LandingHero.vue'
</script>

<template>
  <main>
    <LandingHero />
    <FetchingPopularAnime />
    <FirstAnimeCover />
    <FetchingNewAnime />
    <PrivacyModal />
  </main>
</template>

<style scoped>
main {
  padding: 0rem 0rem 0rem 3rem;
}

@media (max-width: 800px) {
  main {
    padding: 0;
  }
}
</style>
