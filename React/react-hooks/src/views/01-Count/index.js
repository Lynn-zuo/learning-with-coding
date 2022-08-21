import React, {useState} from 'react'

export default function Count() {
  const [count, setCount] = useState(0)
  return (
    <div>
        <h2>Counter</h2>
        <div>
            <p>当前计数：{count}</p>
            <button onClick={() => {setCount(count + 1)}}>+</button>
            <button onClick={() => {setCount(count - 1)}}>-</button>
        </div>
    </div>
  )
}
