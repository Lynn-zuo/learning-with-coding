import React, {useState, useMemo} from 'react'

function calTotal(num) {
  console.log('重新执行')

  let total = 0
  for (let i=1; i<=num; i++) {
    total += i
  }
  return total
}

export default function UseMemo() {
  console.log('重新渲染')
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  const total = useMemo(() => {
    calTotal(count) // calTotal仅在count依赖发生改变时才重新执行
  }, [count])
  // const total = calTotal(count) // calTotal每次重新执行
  return (
    <div>
        <h2>UseMemo</h2>
        <div>
            <p>当前计数和：{total}</p>
            <button onClick={e => setCount(count+1)}>++</button>
            <button onClick={e => setCount(count-1)}>--</button>
            <button onClick={() => setShow(!show)}>show切换</button>
        </div>
    </div>
  )
}
