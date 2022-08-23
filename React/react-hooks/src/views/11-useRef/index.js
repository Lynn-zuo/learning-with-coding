import React, {Component,useRef,useState,useEffect} from 'react'

class CButton extends Component {
    render() {
        return <button>class组件文案</button>
    }
}

// function FButton () {
//     return <button>函数组件文案</button>
// }

export default function UseRef() {
  const titleRef = useRef()
  const inputRef = useRef()
  const classBtnRef = useRef()
//   const funcBtnRef = useRef()
  function changeDom () {
    titleRef.current.innerHTML = 'new title' // 操作DOM元素属性
    inputRef.current.focus() // 操作DOM元素方法
    console.log(classBtnRef, '---classbutton') // 打印类组件实例
    // console.log(funcBtnRef, '---funcbutton') // 函数组件没有实例，报错
  }

  const [count, setCount] = useState(0)
  const countRef = useRef(count)
  useEffect(() => {
    countRef.current = count
  }, [count])
  return (
    <div>
        <h2 ref={titleRef}>UseRef</h2>
        <input ref={inputRef} type="text" />
        <CButton ref={classBtnRef} />
        {/* <FButton ref={funcBtnRef} /> */}
        <button onClick={() => changeDom()}>修改DOM</button>
        <p>ref-count上一次的值:{countRef.current}</p>
        <p>count这一次的值:{count}</p>
        <button onClick={() => setCount(count+10)}>+10</button>
    </div>
  )
}
