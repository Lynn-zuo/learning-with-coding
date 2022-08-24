import React from 'react'
import { useLocalStorage } from '@/hooks/util-hook'

export default function LocalStorage() {
  const [userInfo, setUserInfo] = useLocalStorage({ name: 'test', age: 0})
  return (
    <div>
        <h2>LocalStorage:{userInfo && (userInfo.name + '-' + userInfo.age)}</h2>
        <button onClick={() => setUserInfo({ name: 'lynne', age: 25 })}>设置用户</button>
    </div>
  )
}
