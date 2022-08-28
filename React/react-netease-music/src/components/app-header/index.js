import React, { memo } from "react"
import { NavLink } from "react-router-dom"

export default memo(function XAppHeader() {
  return (
    <div>
      <NavLink to='/'>发现音乐</NavLink>
      <NavLink to='/friend'>我的朋友</NavLink>
      <NavLink to='/mine'>我的音乐</NavLink>
    </div>
  )
})
