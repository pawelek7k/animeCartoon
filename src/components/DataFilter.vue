<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import SearchInput from './DataFilter/SearchInput.vue'
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
      <div class="data-filter-content" :class="{ 'is-closed': !isOpen }">
        <SearchInput />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hamburger-container {
  position: fixed;
  top: 1.2rem;
  left: 1.7rem;
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
  padding: 4rem 0.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90px;
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(0);
  transition:
    width 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  background: transparent;
  z-index: 999;
}

.data-filter-content.is-closed {
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

.data-filter-content {
  height: 100%;
  width: 100%;
  transition: all 0.3s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2rem;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 1) 100%);
  backdrop-filter: blur(5px);
}

.data-filter-content.is-closed {
  border-radius: 2rem;
  border: thin solid var(--primary);
  padding: 2.2rem 2rem;
  overflow-y: hidden;
}

.data-filter-container.is-open .data-filter-content {
  border-radius: 2rem;
  width: 100%;
  border: none;
}

.data-filter-container.is-open {
  width: 40%;
  transform: translateX(0);
}
</style>
