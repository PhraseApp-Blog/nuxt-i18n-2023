<template>
  <Html :lang="head.htmlAttrs?.lang ?? ''" :dir="head.htmlAttrs?.dir ?? 'ltr'">
    <Head>
      <Title>{{ $t("app_title") }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
    </Head>
    <Body>
      <header class="bg-slate-900 text-purple-100 shadow-sm shadow-slate-900">
        <nav class="flex gap-8 items-center py-1 px-2 max-w-[1200px] mx-auto">
          <NuxtLink to="/" class="flex items-center text-xl font-bold"
            ><span class="logo-container"
              ><img src="/img/brand-logo.svg" alt="Andorable logo"
            /></span>
            {{ $t("app_title") }}</NuxtLink
          >
          <ul class="flex gap-6 text-lg">
            <li><NuxtLink to="/">Shows</NuxtLink></li>
            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
          </ul>
        </nav>
      </header>

      <main class="px-4 py-6 max-w-[1200px] mx-auto">
        <slot />
      </main>
    </Body>
  </Html>
</template>

<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
})
</script>

<style scoped>
.logo-container {
  max-width: 60px;
  max-height: 60px;
}
</style>
