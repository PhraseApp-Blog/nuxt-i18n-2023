// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/i18n"],
  routeRules: {
    "/": { redirect: "/en-CA" },
  },
  i18n: {
    locales: ["en-CA", "ar-EG"],
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
})
