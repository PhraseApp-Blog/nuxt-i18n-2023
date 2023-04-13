<template>
  <div>
    <h1>{{ show.name }}</h1>
    <div class="w-[400px] pb-2 border-b border-b-black/10">
      <div class="rounded-md overflow-hidden">
        <img :src="show.img" :alt="`Image for ${show.name}`" />
      </div>
      <div class="flex justify-between mt-3 px-1">
        <p class="text-sm font-light">Premiered {{ show.premieredAt }}</p>
        <p class="text-sm font-light">{{ show.episodeCount }} episodes</p>
      </div>
    </div>
    <p class="mt-2 px-1">{{ show.description }}</p>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params
const { data } = await useFetch(`/api/shows/${id}`)
const show = data.value!
</script>
