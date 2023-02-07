import type { PlasmoCSConfig } from "plasmo"

import { Storage } from "@plasmohq/storage"

export const config: PlasmoCSConfig = {
  matches: ["*://github.com/*"],
  all_frames: true
}

if (
  window.location.pathname.match(/^\/$/) ||
  window.location.pathname.match(/^\/dashboard\/?$/)
) {
  const storage = new Storage()

  const intro = document.querySelector(
    ".application-main > .d-md-flex > .flex-auto.col-md-8.col-lg-8.px-3.px-lg-5 .col-md-12.col-lg-8.mt-3.border-bottom .my-3"
  )

  const title = intro.getElementsByTagName("h1")[0]
  const description = intro.getElementsByTagName("p")[0]

  function setTitle(val) {
    if (val) title.innerHTML = val
  }

  function setDescription(val) {
    if (val) description.innerHTML = val
  }

  ;(async () => {
    setTitle(await storage.get("title"))
    setDescription(await storage.get("description"))
  })()

  storage.watch({
    title: (c) => {
      setTitle(c.newValue)
    },
    description: (c) => {
      setDescription(c.newValue)
    }
  })
}
