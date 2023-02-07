import { useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"

function IndexPopup() {
  const [stateTitle, setStateTitle] = useState("")
  const [stateDescription, setStateDescription] = useState("")

  const storage = new Storage()

  function setTitle(val) {
    setStateTitle(val)
    ;(async () => {
      await storage.set("title", val)
    })()
  }

  function setDescription(val) {
    setStateDescription(val)
    ;(async () => {
      await storage.set("description", val)
    })()
  }

  useEffect(() => {
    ;(async () => {
      const storedTitle = await storage.get("title")
      if (storedTitle) setStateTitle(storedTitle)

      const storedDescription = await storage.get("description")
      if (storedDescription) setStateDescription(storedDescription)
    })()
  }, [])

  return (
    <>
      {/* TODO: move <meta /> to <head /> */}
      <meta name="color-scheme" content="light dark" />
      <h1>Github Custom Dashboard Intro</h1>
      <textarea
        onChange={(e) => setTitle(e.target.value)}
        value={stateTitle}
        placeholder="Title"
        style={{ width: 400, height: 60, resize: "vertical" }}
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={stateDescription}
        placeholder="Description"
        style={{ width: 400, height: 60, resize: "vertical" }}
      />
      <p>Leave the blanks empty to disable modification.</p>
      <hr />
      <p>
        <a
          href="https://github.com/MrWillCom/github-custom-dashboard-intro/blob/main/LICENSE"
          target="_blank">
          MIT Licensed
        </a>{" "}
        ·{" "}
        <a href="https://mrwillcom.com/" target="_blank">
          Mr. Will
        </a>{" "}
        ·{" "}
        <a
          href="https://github.com/MrWillCom/github-custom-dashboard-intro"
          target="_blank">
          GitHub
        </a>
      </p>
    </>
  )
}

export default IndexPopup
