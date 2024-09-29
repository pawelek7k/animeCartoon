<script setup lang="ts">
interface Props {
  label: string
}

defineProps<Props>()
</script>

<template>
  <button>{{ label }}</button>
</template>

<style scoped>
button {
  cursor: pointer;
  border: none;
  padding: 1rem 2rem;
  border-radius: 2rem;
  text-transform: uppercase;
  font-weight: 600;
  background-color: transparent;
  border: thin solid var(--accent);
  color: var(--accent);
  transition: 0.3s ease-in-out;
}

button:hover {
  border: thin solid var(--secondary);
  color: var(--secondary);
}
</style>
