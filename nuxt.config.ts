// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/i18n"],
  routeRules: {
    "/": { redirect: "/en-CA" },
  },
  i18n: {
    baseUrl: "http://localhost:3000",
    locales: [
      { code: "en-CA", iso: "en-CA", dir: "ltr" },
      { code: "ar-EG", iso: "ar-EG", dir: "rtl" },
    ],
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
})
