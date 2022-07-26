import React, {memo} from "react"
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { decrement, subAction } from '@/store/counter/actionCreator.js'

function About (props) {
  console.log('----Redux Home SUB重新渲染了----')

  const { val } = useSelector(state => ({
    // counter: state.counterInfo.counter
  }), shallowEqual)

  const dispatch = useDispatch()

  const decrementOne = () => {
    dispatch(decrement())
  }

  const subNumber = (num) => {
    dispatch(subAction(num))
  }
  
  return <div>
      <h2>Home SUB</h2>
      <p>{val}</p>
      {/* <p>{counter}</p> */}
      <button onClick={e => {decrementOne()}}>-1</button>
      <button onClick={e => {subNumber(5)}}>-5</button>
  </div>
}

export default memo(About)
