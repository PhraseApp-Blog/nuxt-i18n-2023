// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/i18n"],
  routeRules: {
    "/": { redirect: "/en-CA" },
  },
  i18n: {
    baseUrl: "http://localhost:3000",
    locales: [
      {
        code: "en-CA",
        name: "English",
        iso: "en-CA",
        dir: "ltr",
        file: "en-CA.ts",
      },
      {
        code: "ar-EG",
        name: "العربية (Arabic)",
        iso: "ar-EG",
        dir: "rtl",
        file: "ar-EG.ts",
      },
    ],
    lazy: true,
    langDir: "lang",
    strategy: "prefix",
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
})
