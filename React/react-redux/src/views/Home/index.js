import React, { PureComponent } from "react"
import store from '../../store/index.js'
import { addAction, subAction } from '../../store/actionCreator.js'

export default class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
        counter: store.getState().counter
    }
  }
  componentDidMount() {
    // 订阅
    this.unsubscribe = store.subscribe(() => {
        this.setState({
            counter: store.getState().counter
        })
    })
  }
  UNSAFE_componentWillMount() {
    // 取消订阅
    this.unsubscribe()
  }
  render() {
    const { counter } = this.state
    return <div>
        <p>{counter}</p>
        <button onClick={e => {store.dispatch(addAction(1))}}>+</button>
        <button onClick={e => {store.dispatch(subAction(1))}}>-</button>
    </div>
  }
}
