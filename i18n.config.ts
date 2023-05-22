import { arabicPlurals } from "./i18n/plurals"
import { datetimeFormats } from "./i18n/datetime-formats"

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "en-CA",
  pluralRules: {
    "ar-EG": arabicPlurals,
  },
  datetimeFormats,
}))
