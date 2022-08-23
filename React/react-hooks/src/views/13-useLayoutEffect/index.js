import React, {useState, useLayoutEffect} from 'react'

export default function UseLayoutEffect() {
  const [num, setNum] = useState(0)
  // useEffect(() => { // 整个数字始终抖动变化
  useLayoutEffect(() => { // 不抖，且只有数字的小数部分改变
    if (num === 0) {
        const random = Math.floor(Math.random() * 100)/100 + 200
        setNum(random)
    }
  }, [num])
  
  return (
    <div>
        <h2>UseLayoutEffect</h2>
        <p>{num}</p>
        <button onClick={() => setNum(0)}>抽取随机数</button>
    </div>
  )
}
