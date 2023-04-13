import { showData as shows } from "../../../data/show-data"

export default defineEventHandler(async (event) => {
  return shows
})
