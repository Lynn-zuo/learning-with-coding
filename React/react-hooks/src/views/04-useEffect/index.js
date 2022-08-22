import React, {useState, useEffect} from 'react'

export default function useEffectDemo() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('执行useEffect')
    document.title = count
  })
  return (
    <div>
        <h2>useEffectDemo</h2>
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
