<template>
  <NuxtLink :to="localePath(to)"><slot /></NuxtLink>
</template>

<script setup lang="ts">
defineProps(["to"])

const localePath = useLocalePath()
</script>
