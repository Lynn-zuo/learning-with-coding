import React, { useEffect } from "react"

const useLoggingLife = (name) => {
  useEffect(() => {
    console.log(`${name}组件 mount--`)
    return () => {
      console.log(`${name}组件 unmount--`)
    }
  })
}

const Component1 = (props) => {
  useLoggingLife("Component1")
  return <div>component1</div>
}
const Component2 = (props) => {
  useLoggingLife("Component2")
  return <div>component2</div>
}

export default function CustomHook() {
  useLoggingLife("CustomHook")
  return (
    <div>
      <h2>CustomHook</h2>
      <Component1 />
      <Component2 />
    </div>
  )
}
