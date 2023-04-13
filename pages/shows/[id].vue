<template>
  <div v-if="show">
    <Head>
      <Title>{{ title(show.name) }}</Title>
      <Meta name="description" :content="show.description" />
    </Head>
    <div>
      <h1 class="text-5xl">{{ show.name }}</h1>
      <div class="w-[400px] pb-3 mb-3 border-b border-b-white/10">
        <div class="rounded-md overflow-hidden">
          <img :src="show.img" :alt="`Image for ${show.name}`" />
        </div>
        <div class="flex justify-between mt-3 px-1">
          <p class="text-sm font-light">Premiered {{ show.premieredAt }}</p>
          <p class="text-sm font-light">{{ show.episodeCount }} episodes</p>
        </div>
      </div>
      <p class="text-lg px-1">{{ show.description }}</p>
      <p class="text px-1 mt-3">
        —
        <a :href="show.source" class="text-purple-500 underline"
          >From Wikipedia</a
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params
let { data: show } = await useFetch(`/api/shows/${id}`)
</script>
