<script setup lang="ts"></script>

<template>
  <div>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  position: fixed;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    rgba(69, 70, 94, 0.7315301120448179) 0%,
    rgba(9, 6, 14, 0.09567577030812324) 51%,
    rgba(69, 70, 94, 0.8239670868347339) 100%
  );
  width: 100%;
  border-top: thin solid #fff;
  padding: 1rem;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #2b333e;
  font-weight: bold;
  transition: 250ms ease-in-out;
  font-family: 'Trade Winds', system-ui;
}

.nav-link:hover {
  color: #0f1423;
}
</style>
