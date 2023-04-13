import { showData as shows } from "../../../data/show-data"

export default defineEventHandler(async (event) => {
  const id = +event.context.params!.id

  return shows.find((show) => show.id === id)!
})
