import React from "react"
import { useLoggingLife, useScrollPosition } from '@/hooks/util-hook'

const Component1 = (props) => {
  useLoggingLife("Component1")
  return <div>component1</div>
}
const Component2 = (props) => {
  useLoggingLife("Component2")
  return <div>component2</div>
}

export default function CustomHook() {
  const scrollPosition = useScrollPosition()
  return (
    <div style={{padding: '800px 0'}}>
      <h2 style={{position: 'fixed', left: 0, top: '30px'}}>CustomHook: {scrollPosition}</h2>
      <Component1 />
      <Component2 />
    </div>
  )
}
