import React from "react"
import { connect } from 'react-redux'
import { decrement, subAction } from '@/store/counter/actionCreator.js'

function About (props) {
  const { counter } = props
  return <div>
      <h2>Home SUB</h2>
      <p>{counter}</p>
      <button onClick={e => {props.decrement()}}>-1</button>
      <button onClick={e => {props.subNumber(5)}}>-5</button>
  </div>
}

const mapStateToProps = state => {
  console.log(state, '---state')
  return { // 传入store的getState()函数获取的state
    counter: state.counterInfo.counter // 这样只在connect中引用一次store
  }
}

const mapDispatchToProp = dispatch => {
  return { // 传入store的dispatch函数
    decrement: function() {
      dispatch(decrement())
    },
    subNumber: function(num) {
      dispatch(subAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(About)
