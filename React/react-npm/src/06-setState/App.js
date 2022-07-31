import { Component } from "react"
export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
        count: 0
    }
  }
  render() {
    return (
      <div>
        <h2>setState详解</h2>
        <p>{ this.state.count }</p>
        <button onClick={(e) => this.increment(e)}>改变文本+</button>
      </div>
    )
  }

  componentDidUpdate() { // 方式二： 获取异步更新的state
    console.log('update+', this.state.count)
  }

  increment(e) {
    console.log('before+', this.state.count) // 0
    this.setState({
        count: this.state.count + 1
    }, () => { // 方式一： 获取异步更新的state
        console.log('callback+', this.state.count) // 1
    })
    console.log('after+', this.state.count) // 0
  }
}
