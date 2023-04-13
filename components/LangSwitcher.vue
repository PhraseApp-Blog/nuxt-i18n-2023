<template>
  <div>
    🌐
    <select :value="locale" @change="onLocaleChanged" class="bg-slate-900">
      <option
        v-for="loc in locales as Array<LocaleObject>"
        :key="loc.code"
        :value="loc.code"
      >
        {{ loc.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables"

const { locale, locales, setLocale } = useI18n()

function onLocaleChanged(event: Event) {
  const target = event.target as HTMLInputElement
  setLocale(target.value)
}
</script>
