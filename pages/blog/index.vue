<template>
  <div>
    <h1>From the Blog</h1>
    <ul>
      <ContentList path="/blog" v-slot="{ list }">
        <li
          v-for="post in list"
          :key="post._path"
          class="border-b border-b-white/10 last:border-b-0 mb-3 pb-3"
        >
          <NuxtLink :to="post._path" class="flex items-baseline gap-1">
            <h3 class="text-xl font-bold">{{ post.title }}</h3>
            —
            <p class="text-lg">{{ post.description }}</p>
          </NuxtLink>
        </li>
      </ContentList>
    </ul>
  </div>
</template>
