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
        <h2>类组件定义</h2>
        <p>1. 组件名称必须以大写开头，小写视为原生标签</p>
        <p>2. 类组件必须继承自react.Component</p>
        <p>3. render()函数是唯一必须实现的方法</p>
        <p>4. constructor初始化组数据，可选实现</p>
        <p>5. super()方法基于类继承，在constructor中调用</p>
        <p>6. this.state维护的是组件内部数据</p>
        <p>{ this.state.count }</p>
        <button onClick={(e) => this.increment(e)}>+</button>
      </div>
    )
  }

  increment(e) {
    console.log(e, '++++')
    this.setState({
        count: this.state.count + 1
    })
  }
}
