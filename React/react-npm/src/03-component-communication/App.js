import { Component } from "react"
import PropTypes from 'prop-types'

class ComponentA extends Component { // 类组件获取父组件传递的参数
  constructor(props) {
    super(props) // 父类保存 - 类的继承原理ES5
    // this.props=props
    this.state = {}
  }
  static propTypes = { // 方式二：es6中的class field写法
    fatherName: PropTypes.string,
    count: PropTypes.number,
    films: PropTypes.array
  }
  render() {
    // 可以通过react-test-render拿到props
    console.log('ComponentA--执行了render方法')
    const { fatherName, count, films, subtract } = this.props
    return (
      <div>
        <h2>{fatherName}的子组件</h2>
        <p>{fatherName}父组件传递的参数{count}</p>
        <button onClick={subtract}>-</button>
        <ul>
          {films.map(film => <li key={film}>{film}</li>)}
        </ul>
      </div>
    )
  }
}

ComponentA.propTypes = { // 方式一
  fatherName: PropTypes.string,
  count: PropTypes.number,
  films: PropTypes.array
}
ComponentA.defaultProps = {
  fatherName: 'PropTypes.string',
  count: 'PropTypes.number',
  films: 'PropTypes.array'
}

// function ComponentA (props) { // 函数组件获取父组件传递的参数
//   const { fatherName, count } = props
//   return (
//     <div>
//       <h2>{fatherName}的子组件</h2>
//       <p>{fatherName}父组件传递的参数{count}</p>
//     </div>
//   )
// }

export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      count: 0,
      films: ['大话西游', '月光宝盒', '西游记', '三国演义']
    }
  }
  render() {
    const { count, films } = this.state
    return (
      <div>
        <h2>组件生命周期</h2>
        <p>{count}</p>
        <button onClick={(e) => this.increment(e)}>+</button>
        <hr />
        <ComponentA fatherName='App' films={films} count={count} subtract={(e) => this.subtract(e)} />
      </div>
    )
  }

  increment(e) {
    this.setState({
      count: this.state.count + 1,
    })
  }

  subtract(e) {
    this.setState({
      count: this.state.count - 1,
    })
  }
}
