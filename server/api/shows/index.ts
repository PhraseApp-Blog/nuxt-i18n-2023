import { showData as shows } from "../../../data/show-data"

export default defineEventHandler(async (event) => {
  const { locale } = getQuery(event)

  return shows.map(({ translations, ...others }) => ({
    ...others,
    ...translations[locale as keyof typeof translations],
  }))
})
