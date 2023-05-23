import { showData as shows } from "../../../data/show-data"

export default defineEventHandler(async (event) => {
  const id = +event.context.params!.id
  const { locale } = getQuery(event)

  const { translations, ...others } = shows.find((show) => show.id === id)!

  return { ...others, ...translations[locale as keyof typeof translations] }
})
