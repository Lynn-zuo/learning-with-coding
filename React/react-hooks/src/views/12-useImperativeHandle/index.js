import React, {useRef, forwardRef, useImperativeHandle} from 'react'

const FInput = forwardRef((props, ref) =>  {
    const inputRef = useRef()
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus()
        console.log('useImperativeHandle中回调函数返回的对象的focus')
      }
    }), [inputRef])
    return <input ref={inputRef} type='text' />
})

export default function UseImperativeHandle() {
  const fInputRef = useRef()
  return (
    <div>
        <h2>UseImperativeHandle</h2>
        <FInput ref={fInputRef} />
        <button onClick={() => fInputRef.current.focus()}>focus</button>
    </div>
  )
}
