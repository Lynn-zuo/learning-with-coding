import React, {useReducer} from 'react'
import countReducer from './countReducer'

export default function UseReducer() {
  // 第二个参数可以是单个变量也可以是对象
  const [state, dispatch] = useReducer(countReducer, {count: 0})
  return (
    <div>
        <h2>UseReducer</h2>
        <div>
            <p>当前计数：{state.count}</p>
            <button onClick={() => {dispatch({type: 'increment'})}}>+</button>
            <button onClick={() => {dispatch({type: 'decrement'})}}>-</button>
        </div>
    </div>
  )
}
