<script setup lang="ts">
interface Props {
  label: string
  href?: string
}

defineProps<Props>()
</script>

<template>
  <a :href="href">{{ label }}</a>
</template>

<style scoped>
a {
  cursor: pointer;
  display: inline-block;
  transition: transform 0.3s ease-in-out;
  text-decoration: none;
  color: var(--primary);
  letter-spacing: 1px;
}

a:hover {
  transform: translateY(-2px);
}
</style>
