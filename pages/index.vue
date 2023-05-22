<template>
  <div>
    <Head>
      <Title>{{ $t("home.title") }}</Title>
      <Meta
        name="description"
        content="Andorable is a curated list and blog all about streaming Star Wars shows."
      />
    </Head>

    <h1>{{ $t("home.header") }}</h1>

    <section class="grid grid-cols-3 gap-4">
      <div
        v-for="show in shows"
        :key="show.id"
        class="overflow-hidden rounded-md bg-slate-900 shadow-sm shadow-slate-900"
      >
        <LocLink :to="`/shows/${show.id}`">
          <img :src="show.img" :alt="`Image for ${show.name}`" />
          <h3 class="mb-1 px-2 pt-1 font-semibold">{{ show.name }}</h3>
          <div
            class="mb-2 flex justify-between px-2 text-xs font-light text-purple-100/50"
          >
            <p>{{ $d(Date.parse(show.premieredAt), "short") }}</p>
            <p>{{ $t("show.episodes", show.episodeCount) }}</p>
          </div>
        </LocLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: shows } = await useFetch("/api/shows")
</script>
