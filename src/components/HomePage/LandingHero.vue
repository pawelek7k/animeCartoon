<script setup lang="ts"></script>

<template>
  <section>
    <h1>Welcome in AnimeCartoon!</h1>
    <img src="../../../public/images/headerImage.gif" alt="" />
  </section>
</template>

<style scoped>
section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
}

img {
  border-radius: 2rem;
  -webkit-box-shadow: 0px 8px 24px 0px rgba(7, 7, 20, 1);
  -moz-box-shadow: 0px 8px 24px 0px rgba(7, 7, 20, 1);
  box-shadow: 0px 8px 24px 0px rgba(7, 7, 20, 1);
}

h1 {
  font-size: 3rem;
  font-family: 'Trade Winds', system-ui;
}
</style>
