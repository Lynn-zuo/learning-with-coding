import React, { useContext } from "react"
import { UserContext, ThemeContext } from "@/context"

export default function ContextHook() {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)
  console.log(user, theme, "---context----")
  return (
    <div>
      <h2>ContextHook</h2>
    </div>
  )
}
