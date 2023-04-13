<template>
  <div>
    🌐
    <select @change="onLocaleChanged" class="bg-slate-900">
      <option
        v-for="loc in locales as Array<LocaleObject>"
        :key="loc.code"
        :value="loc.code"
        :selected="loc.code === locale"
      >
        {{ loc.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables"

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

function onLocaleChanged(event: Event) {
  const target = event.target as HTMLInputElement
  router.push({ path: switchLocalePath(target.value) })
}
</script>
