<template>
  <Head>
    <Title>{{ localizedTitle("blog.title") }}</Title>
  </Head>

  <div>
    <h1>{{ $t("blog.title") }}</h1>

    <ul>
      <li
        v-for="post in posts"
        :key="post._path"
        class="mb-3 border-b border-b-white/10 pb-3 last:border-b-0"
      >
        <LocLink
          :to="stripTrailingLocale(post._path!)"
          class="items-baseline gap-1"
        >
          <h3 class="text-xl font-bold">{{ post.title }}</h3>
          <p class="font-thin">{{ post.description }}</p>
        </LocLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const posts = await queryContent("blog")
  .where({ locale: locale.value.toLowerCase() })
  .find()

function stripTrailingLocale(path: string): string {
  return path.replace(locale.value.toLowerCase(), "")
}
</script>
