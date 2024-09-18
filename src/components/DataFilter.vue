<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenuOnEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    isOpen.value = false
  }
}
onMounted(() => {
  window.addEventListener('keydown', closeMenuOnEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', closeMenuOnEscape)
})
</script>

<template>
  <div>
    <div class="hamburger-container">
      <input
        class="toggle-checkbox"
        id="toggle"
        type="checkbox"
        :checked="isOpen"
        @change="toggleMenu"
      />
      <label class="hamburger" for="toggle">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </label>
    </div>
    <div class="data-filter-container" :class="{ 'is-open': isOpen }">
      <m-input placeholder="Search..." />
    </div>
  </div>
</template>

<style scoped>
.hamburger-container {
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
}

.toggle-checkbox {
  display: none;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 20px;
  z-index: 999;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.hamburger .bar {
  width: 100%;
  height: 3px;
  background-color: #e5e8ef;
  border-radius: 2rem;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.toggle-checkbox:checked + .hamburger .bar:nth-child(2) {
  transform: translate(0px, 2rem);
  opacity: 0;
  transition-delay: 0.3s;
}

.toggle-checkbox:checked + .hamburger .bar:nth-child(3) {
  transform: translate(0px, -2rem);
  transition-delay: 0s;
}

.toggle-checkbox:checked + .hamburger .bar:nth-child(1) {
  transform: rotate(-45deg) scale(0.7);
  transition-delay: 0.6s;
}

.toggle-checkbox:checked + .hamburger .bar:nth-child(3) {
  transform: rotate(45deg) scale(0.7);
  transition-delay: 0.6s;
}

.data-filter-container {
  padding: 4rem 2rem;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
  position: fixed;
  left: 0;
  border-right: thin solid #fff;
  top: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1;
}

.data-filter-container.is-open {
  transform: translateX(0);
}
</style>
