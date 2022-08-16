import React, { PureComponent } from "react"
import store from '@/store/index.js'
import { increment, addAction } from '@/store/actionCreator.js'

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
  componentWillUnmount() {
    // 取消订阅
    this.unsubscribe();
  }
  render() {
    const { counter } = this.state
    return <div>
        <h2>About ADD</h2>
        <p>{counter}</p>
        <button onClick={e => {store.dispatch(increment())}}>+1</button>
        <button onClick={e => {store.dispatch(addAction(5))}}>+5</button>
    </div>
  }
}
