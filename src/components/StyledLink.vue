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

<style scoped></style>
