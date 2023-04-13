<template>
  <div>
    <h1>Currently streaming</h1>

    <section class="grid grid-cols-3 gap-4">
      <div
        v-for="show in shows"
        :key="show.id"
        class="bg-slate-900 rounded-md overflow-hidden shadow-sm shadow-slate-900"
      >
        <NuxtLink :to="`/shows/${show.id}`">
          <img :src="show.img" :alt="`Image for ${show.name}`" />
          <h3 class="font-semibold px-2 pt-1 mb-1">{{ show.name }}</h3>
          <div
            class="flex justify-between px-2 mb-2 text-xs font-light text-purple-100/50"
          >
            <p>{{ show.premieredAt }}</p>
            <p>{{ show.episodeCount }} episodes</p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: shows } = await useFetch("/api/shows")
</script>
