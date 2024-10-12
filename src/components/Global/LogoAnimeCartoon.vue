<script setup lang="ts"></script>

<template>
  <div>
    <h1>
      <router-link to="/" class="nav-link">Anime<span>Cartoon</span></router-link>
    </h1>
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Trade Winds', system-ui;
  cursor: pointer;
}

span {
  background: -webkit-linear-gradient(var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-link {
  text-decoration: none;
  color: var(--text);
}
</style>
