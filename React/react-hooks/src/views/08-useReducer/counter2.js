import React, {useReducer} from 'react'
import countReducer from './countReducer'

export default function UseReducer() {
  // 可以使用同一个reducer函数，但两个组件不共享数据
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
