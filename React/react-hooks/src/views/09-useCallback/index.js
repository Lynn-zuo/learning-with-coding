import React, {useState, useCallback} from 'react'

export default function Count() {
  const [count, setCount] = useState(0)
  function increment() {
    console.log('执行了increment')
    setCount(count + 1)
  }
  const subtract = useCallback(() => { // 这种写法不存在性能优化
    console.log('执行了decrement')
    // setCount(prev => prev - 1) 
    setCount(count - 1) // 如果不在第二个参数数组中传入count
  }, [count])// 就会一直引用初始count的值，不会重新渲染

  return (
    <div>
        <h2>Counter</h2>
        <div>
            <p>当前计数：{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={subtract}>-</button>
        </div>
    </div>
  )
}
