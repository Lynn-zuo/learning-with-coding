import React from "react"
// import { UserContext, ThemeContext } from "@/context"
import { useUserHook } from '@/hooks/user-hook.js'

export default function ContextHook() {
  // const user = useContext(UserContext)
  // const theme = useContext(ThemeContext)
  const [user, theme] = useUserHook()
  console.log(user, theme, "---context----")
  return (
    <div>
      <h2>ContextHook</h2>
    </div>
  )
}
