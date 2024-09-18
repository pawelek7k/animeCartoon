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
  top: 1rem;
  left: 1rem;
  z-index: 1000;
}

.toggle-checkbox {
  display: none;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
}

.hamburger .bar {
  width: 100%;
  height: 3px;
  background-color: var(--text);
  border-radius: 2rem;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.toggle-checkbox:checked + label .bar:nth-child(1) {
  transform: rotate(-45deg) translate(-6px, 6px);
}

.toggle-checkbox:checked + label .bar:nth-child(2) {
  opacity: 0;
}

.toggle-checkbox:checked + label .bar:nth-child(3) {
  transform: rotate(45deg) translate(-6px, -6px);
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
  border-right: thin solid var(--primary);
  top: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 1) 100%);
  z-index: 999;
}

.data-filter-container.is-open {
  transform: translateX(0);
}
</style>
