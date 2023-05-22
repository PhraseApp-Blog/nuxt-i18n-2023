<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
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
        <nav class="mx-auto flex max-w-[1200px] items-baseline gap-8 px-2 py-1">
          <LocLink to="/" class="flex shrink-0 items-baseline text-xl font-bold"
            ><span class="logo-container"
              ><img src="/img/brand-logo.svg" alt="Andorable logo"
            /></span>
            <span class="relative -top-5 block">{{
              $t("app_title")
            }}</span></LocLink
          >
          <div
            class="relative -top-5 flex w-full items-baseline justify-between"
          >
            <ul class="grow-1 flex gap-6 text-lg">
              <li>
                <LocLink to="/">{{ $t("nav.shows") }}</LocLink>
              </li>
              <li>
                <LocLink to="/blog">{{ $t("nav.blog") }}</LocLink>
              </li>
              <li>
                <LocLink to="/about">{{ $t("nav.about") }}</LocLink>
              </li>
            </ul>

            <LangSwitcher class="pr-3" />
          </div>
        </nav>
      </header>

      <main class="mx-auto max-w-[1200px] px-4 py-6">
        <Notification>{{
          $t("notifications.new_episode", { username: "Mary", show: "Andor" })
        }}</Notification>
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
const htmlAttrs = computed(() => head.value.htmlAttrs!)
</script>

<style scoped>
.logo-container {
  max-width: 60px;
  max-height: 60px;
}
</style>
