<template>
  <Head>
    <Title>{{ title(post.title!) }}</Title>
    <Meta name="description" :content="post.description" />
  </Head>
  <div class="prose prose-lg prose-invert text-white prose-a:text-purple-500">
    <h1>{{ post.title }}</h1>
    <ContentRenderer :value="post" />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()

const post = await queryContent(
  "blog",
  route.params.slug as string,
  locale.value.toLowerCase()
).findOne()
</script>
