<template>
  <Body class="bg-slate-800 text-purple-50">
    <header class="bg-slate-900 text-purple-100 shadow-sm shadow-slate-900">
      <nav class="flex gap-8 items-center p-2">
        <NuxtLink to="/" class="flex items-center text-xl font-bold"
          ><span class="logo-container"
            ><img
              src="/img/brand-logo.svg"
              alt="Andorable logo"
              class="logo fill-white stroke-white"
          /></span>
          Andorable</NuxtLink
        >
        <ul class="flex gap-6 text-lg">
          <li><NuxtLink to="/">Shows</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="px-4 py-6">
      <slot />
    </main>
  </Body>
</template>

<style scoped>
.logo-container {
  max-width: 60px;
  max-height: 60px;
}
.logo {
  width: 100%;
  height: auto;
}
</style>
