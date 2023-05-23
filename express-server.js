/**
 * ⚠️ This server is not production-ready! It has no security!
 * It is a simple demo to show how a server could be used with Nuxt's
 * static site generation (SSG).
 *
 * See: https://nuxt.com/docs/getting-started/deployment#static-hosting
 */
const express = require("express")
const app = express()
const path = require("path")

const port = process.env.PORT || 4000

app.use(express.static("dist"))

app.get("*", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "en-CA", "index.html"))
})

app.listen(port, () =>
  console.log(`Server is running on: http://localhost:${port}`)
)
