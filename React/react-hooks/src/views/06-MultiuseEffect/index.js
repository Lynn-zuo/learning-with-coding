import React, {useState, useEffect} from 'react'

export default function useEffectCancel() {
  const [count, setCount] = useState(0)
  useEffect(() => { // 订阅事件
    console.log('订阅 -- 执行useEffect -- multi') // 这里相当于componentDidMount
    document.title = count
    return () => { // 这里相当于componentWillUnmount
        console.log('取消订阅 --- multi')
    }
  }, [count]) // []数组内传入依赖的变量，依赖变量改变才会执行
  useEffect(() => {
    console.log('网络请求 -- multi')
  }, []) // []数组为空表示谁都不依赖
  useEffect(() => {
    console.log('更新state -- multi')
  }, [count])
  return (
    <div>
        <h2>useEffectCancel</h2>
        <div>
            <p>当前计数：{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={subtract}>-</button>
        </div>
    </div>
  )
  function increment() { // 会合并，最终只+1
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }
  function subtract() { // 不会合并，+3
    setCount(prev => prev - 1)
    setCount(prev => prev - 1)
    setCount(prev => prev - 1)
  }
}
