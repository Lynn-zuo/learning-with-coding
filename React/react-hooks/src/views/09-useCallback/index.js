import React, {useState, useCallback, memo} from 'react'

const LCButton = memo((props) => { // 执行浅层比较
    console.log(props.buttonTxt,'重新渲染了')
    return <button onClick={props.action}>{props.buttonTxt}</button>
})

export default function UseCallback() {
  console.log('useCallback重新渲染')
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0)
  function increment() { // 始终重新渲染
    console.log('执行了increment')
    setCount(count + 1)
  }
  const subtract = useCallback(() => { // 结合memo实现性能优化
    console.log('执行了decrement') // 这种写法单独不存在性能优化
    // setCount(prev => prev - 1) 
    setCount(count - 1) // 如果不在第二个参数数组中传入count
  }, [count])// 就会一直引用初始count的值，不会重新渲染

  return (
    <div>
        <h2>UseCallback</h2>
        <div>
            <p>当前计数：{count}</p>
            <LCButton buttonTxt='++' action={increment} />
            <LCButton buttonTxt='--' action={subtract} />
            <button onClick={() => setShow(!show)}>show切换</button>
        </div>
    </div>
  )
}
