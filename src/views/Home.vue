<script setup lang="ts">
import LandingHeader from '../components/LandingHeader.vue'
import LandingHero from '../components/LandingHero.vue'
import FetchingData from '../components/FetchingData.vue'
import DataFilter from '../components/DataFilter.vue'
</script>

<template>
  <LandingHeader />
  <DataFilter />
  <main>
    <LandingHero />
    <FetchingData />
  </main>
</template>

<style scoped></style>
