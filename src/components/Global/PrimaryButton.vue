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
  border: thin solid var(--accent);
  background-color: var(--accent);
  font-weight: 600;
  color: var(--text);
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: var(--secondary);
  border: thin solid var(--secondary);
}
</style>
