import React, {useState, memo, useMemo} from 'react'

const Info = memo((props) => {
    console.log('Info重新渲染')
    return <p>名字：{props.info.name}，年龄：{props.info.age}</p>
})

export default function UseMemo() {
  console.log('useMemo重新渲染')
  const [show, setShow] = useState(false)
//   const info = { // 浅层比较后始终触发重新渲染
//     name: 'lynne',
//     age: 25
//   }
  const info = useMemo(() => {
    return {name: 'lynne', age: 25}
  }, []) // 依赖改变时才触发重新渲染
  return (
    <div>
        <h2>UseMemo</h2>
        <Info info={info} />
        <button onClick={() => setShow(!show)}>show切换</button>
    </div>
  )
}
