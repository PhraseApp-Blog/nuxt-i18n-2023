import { arabicPlurals } from "./i18n/plurals"
import { numberFormats } from "./i18n/number-formats"
import { datetimeFormats } from "./i18n/datetime-formats"

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "en-CA",
  pluralRules: {
    "ar-EG": arabicPlurals,
  },
  numberFormats,
  datetimeFormats,
}))
