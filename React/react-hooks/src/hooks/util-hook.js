import { useEffect, useState } from "react"

export const useLoggingLife = (name) => {
  useEffect(() => {
    console.log(`${name}组件 mount--`)
    return () => {
      console.log(`${name}组件 unmount--`)
    }
  })
}

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  useLoggingLife("CustomHook")
  const handleScroll = (e) => {
    console.log('发生了滚动', window.scrollY)
    setScrollPosition(window.scrollY)
  }
  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => {
        document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return scrollPosition
}
