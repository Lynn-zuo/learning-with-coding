import { PureComponent, memo } from "react"

class Header extends PureComponent {
  render() {
    console.log('header --------')
    return (
      <div>
        <h2>setState详解</h2>
      </div>
    )
  }
}

const MemoBanner = memo(function Banner () {
  console.log('banner --------')
  return (
    <div>
      <h2>banner组件 -- 函数式组件memo使用</h2>
    </div>
  )
})
class Count extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log('count --------')
    const { friends, incrementAge } = this.props
    return (
      <div>
        { friends.map((item, index) => <li key={item.id}>{item.name}年龄{item.age}岁<button onClick={() => incrementAge(index)}>+</button></li>) }
      </div>
    )
  }
}
export default class App extends PureComponent {
  constructor(props) {
    super()
    this.state = {
        friends: [{id: 0, name: '王小波', age: 40}, {id:1, name: '李银河', age: 41}, {id:2, name:'杨绛', age: 40}],
        message: '你好啊王小波'
    }
  }
  // shouldComponentUpdate(nextProps, nextState) { // 方式一，在父组件判断是否需要更新组件
  //   console.log(nextState, '---next')
  //   if (this.state.friends !== nextState.friends) {
  //     return true
  //   }
  //   return false
  // }
  render() {
    console.log('app --------')
    return (
      <div>
        <Header />
        <MemoBanner />
        <Count friends={this.state.friends} incrementAge={(e) => {this.incrementAge(e)}} />
        <ul>
        { this.state.friends.map(item => <li key={item.id}>{item.name}</li>) }
        </ul>
        <p><button onClick={(e) => this.increment(e)}>添加成员</button></p>
        <button onClick={(e) => this.changeText(e)}>改变文本</button>
      </div>
    )
  }


  incrementAge (index) {
    console.log(index, '----age++')
    const newFriends = [...this.state.friends]
    newFriends[index].age++
    this.setState({
      friends: newFriends
    }, () => {
        console.log('callback+', this.state.friends) // 1
    })
  }

  increment = (e) => {
    const last = this.state.friends.slice(-1)
    // 方式一： 直接改变state，不改变引用
    // this.state.friends.push({ id: (last[0].id + 1), name: '钱钟书'})
    // this.setState({
    //     friends: this.state.friends
    // }, () => {
    //     console.log('callback+', this.state.friends) // 1
    // })
    // 方式二：创建一个新数组，改变引用 -- 推荐
    const newFriends = [...this.state.friends]
    newFriends.push({ id: (last[0].id + 1), name: '钱钟书', age: 43})
    this.setState({
      friends: newFriends
    }, () => {
        console.log('callback+', this.state.friends) // 1
    })
  }

  changeText = (e) => {
    this.setState({
      message: '你好李银河'
    }, () => {
      console.log(this.state.message, '---msg')
    })
  }
}
