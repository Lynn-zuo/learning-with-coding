import { Component } from "react"
export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
        count: 0
    }
  }
  render() { // 调用render函数时，检查this.state和this.props的变化并返回以下类型之一
    // return ( // 1.div原生标签 or 自定义组件
    //   <div>
    //     <h2>类组件定义</h2>
    //     <p>1. 组件名称必须以大写开头，小写视为原生标签</p>
    //     <p>2. 类组件必须继承自react.Component</p>
    //     <p>3. render()函数是唯一必须实现的方法</p>
    //     <p>4. constructor初始化组数据，可选实现</p>
    //     <p>5. super()方法基于类继承，在constructor中调用</p>
    //     <p>6. this.state维护的是组件内部数据</p>
    //     <p>{ this.state.count }</p>
    //     <button onClick={(e) => this.increment(e)}>+</button>
    //   </div>
    // )
    // return ( // 2. 数组或fragments
    //   [
    //     <div key='head'>header</div>,
    //     <div key='body'>body</div>,
    //     <div key='foot'>footer</div>
    //   ]
    // )
    // 3. portals -- 渲染子节点到不同DOM中
    // return ( // 4. 字符串或数值 -- 渲染为文本节点
    //   'text'
    // )
    return ( // 5. 布尔类型或null -- 什么都不渲染
      true
    )
  }

  increment(e) {
    console.log(e, '++++')
    this.setState({
        count: this.state.count + 1
    })
  }
}

// export default function App() {
//   let count = 0
//   const increment = () => {
//     console.log('+++++', count)
//     count++
//   }
//   const component = <div>
//     <h2> 函数式组件定义 </h2>
//     <p>1. 普通函数</p>
//     <p>2. 组件名称必须大写字符开头</p>
//     <p>3. 没有this对象</p>
//     <p>4. 没有内部状态</p>
//     <p>5. hooks可以使函数维护内部状态</p>
//     <p>{ count }</p>
//     <button onClick={increment}>+</button>
//   </div>
//   return component
// }
