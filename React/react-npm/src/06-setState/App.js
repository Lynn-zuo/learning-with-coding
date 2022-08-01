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
        <button id='btn'>改变文本++</button>
      </div>
    )
  }

  componentDidMount() { // 方式二：将setState放入原生DOM事件 TODO:不生效，待验证 - 看源码
    document.getElementById('btn').addEventListener('click', () => {
        console.log('btn被点击')
        console.log('before+++', this.state.count)
        this.setState({
            count: this.state.count + 1
        })
        console.log('after+++', this.state.count)
    })
  }

//   componentDidUpdate() { // 方式二： 获取异步更新的state
//     console.log('update+', this.state.count)
//   }

  increment(e) {
    // 使用setState实现同步更新 TODO:不生效，待验证 - 看源码
    // 方式一: 将setState放入定时器
    // 1.多次调用setState相加但合并后值只增加1
    // 2.setState合并时执行多次累加的结果 -- 传入函数获取上一次更新的结果
    console.log('before+', this.state.count)
    setTimeout(() => {
        console.log('before++', this.state.count)
        this.setState({
            count: this.state.count + 1
        })
        this.setState((prev, next) => {
            return {
                count: prev.count + 2
            }
        })
        this.setState((prev, next) => {
            return {
                count: prev.count + 3
            }
        })
        console.log('after++', this.state.count)
    }, 0)
    console.log('after+', this.state.count)
    // console.log('before+', this.state.count) // 0
    // this.setState({
    //     count: this.state.count + 1
    // }, () => { // 方式一： 获取异步更新的state
    //     console.log('callback+', this.state.count) // 1
    // })
    // console.log('after+', this.state.count) // 0
  }
}
