<template>
  <div v-if="show">
    <Head>
      <Title>{{ title(show.name) }}</Title>
      <Meta name="description" :content="show.description" />
    </Head>
    <div>
      <h1 class="text-5xl">{{ show.name }}</h1>
      <div class="mb-3 w-[400px] border-b border-b-white/10 pb-3">
        <div class="overflow-hidden rounded-md">
          <img :src="show.img" :alt="`Image for ${show.name}`" />
        </div>
        <div class="mt-3 flex justify-between px-1">
          <p class="text-sm font-light">Premiered {{ show.premieredAt }}</p>
          <p class="text-sm font-light">
            {{ $t("show.episodes", show.episodeCount) }}
          </p>
        </div>
      </div>
      <p class="px-1 text-lg">{{ show.description }}</p>
      <p class="text mt-3 px-1">
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
const { locale } = useI18n()
let { data: show } = await useFetch(`/api/shows/${id}?locale=${locale.value}`)
</script>
