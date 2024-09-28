<script setup lang="ts">
interface Props {
  label: string
}

const props = defineProps<Props>()
</script>

<template>
  <a>{{ props.label }}</a>
</template>

<style scoped></style>
