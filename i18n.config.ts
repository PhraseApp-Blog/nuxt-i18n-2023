import { arabicPlurals } from "./i18n/plurals"

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "en-CA",
  pluralRules: {
    "ar-EG": arabicPlurals,
  },
}))
