<script setup lang="ts">
import LandingHero from '../components/LandingHero.vue'
import FetchingData from '../components/FetchingData.vue'
import DataFilter from '../components/DataFilter.vue'
</script>

<template>
  <DataFilter />
  <main>
    <LandingHero />
    <FetchingData />
  </main>
</template>

<style scoped></style>
