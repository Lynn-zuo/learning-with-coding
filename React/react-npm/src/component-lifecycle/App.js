import { Component } from "react"
export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      count: 0,
      isShow: false,
    }
  }
  componentDidMount() {
    console.log("APP-mount生命周期---首次渲染")
  }
  componentDidUpdate() {
    console.log("APP-update生命周期---更新渲染")
  }
  componentWillUnmount() {
    console.log("APP-unmount生命周期--移除DOM")
  }
  render() {
    const { count, isShow } = this.state
    console.log('APP--执行了render方法')
    return (
      <div>
        <h2>组件生命周期</h2>
        <p>{count}</p>
        <button onClick={(e) => this.increment(e)}>+</button>
        <hr />
        <button onClick={(e) => this.changeShow(e)}>change</button>
        {isShow && <ComponentA />}
        {/* v-show只更新APP */}
        <ComponentA style={{ display: isShow ? "block" : "none" }} />
      </div>
    )
  }

  increment(e) {
    this.setState({
      count: this.state.count + 1,
    })
  }
  changeShow(e) {
    this.setState({
      isShow: !this.state.isShow,
    })
  }
}

class ComponentA extends Component {
  componentDidMount() {
    console.log("ComponentA-mount生命周期---首次渲染")
  }
  componentWillUnmount() {
    console.log("ComponentA-unmount生命周期--移除DOM")
  }
  render() {
    console.log('ComponentA--执行了render方法')
    return (
      <div>
        <h2>App的字组件</h2>
        <p>测试卸载生命周期</p>
      </div>
    )
  }
}
