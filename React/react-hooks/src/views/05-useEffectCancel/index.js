import React, {useState, useEffect} from 'react'

export default function useEffectCancel() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('订阅 -- 执行useEffect') // 这里相当于componentDidMount
    document.title = count
    return () => { // 这里相当于componentWillUnmount
        console.log('取消订阅')
    }
  }, [count]) // []数组内传入依赖的变量，依赖变量改变才会执行
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
