<script setup lang="ts">
import PrimaryButton from './PrimaryButton.vue'
</script>

<template>
  <div class="ad-container">
    <div>
      <h2>Watch this series without ads!</h2>
      <p>Try AnimeCartoon Premium free for 7 days.</p>
    </div>
    <PrimaryButton label="Try premium!" />
  </div>
</template>

<style scoped>
.ad-container {
  width: 700px;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  border-radius: 2rem;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.7315301120448179) 0%, rgba(0, 0, 0, 1) 100%),
    url('/public/images/ad.jfif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

h2 {
  font-family: 'Trade Winds', system-ui;
}

p {
  font-size: 0.9rem;
}

@media (max-width: 1000px) {
  .ad-container {
    width: 100%;
    padding: 1rem;
  }
}
</style>
