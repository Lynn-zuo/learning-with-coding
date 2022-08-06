import React, { PureComponent, createRef } from 'react'

class Header extends PureComponent {
    render() {
        return (
            <h2>Header</h2>
        )
    }
}
class Home extends PureComponent {
    constructor() {
        super()
        this.titleRef = createRef()
        this.titleElement = null
    }
    render() {
        return (
            <div>
                {/* 方式一：标签加ref -- 不推荐，可能废弃 */}
                <h2 ref='titleRef'>Home</h2>
                {/* 方式二：添加对象 -- React推荐方式 */}
                <h2 ref={this.titleRef}>Home</h2>
                {/* 方式三：回调函数 */}
                <h2 ref={arg => this.titleElement = arg}>Home</h2>
                <button onClick={() => { this.changeText() }}>改变文本</button>
            </div>
        )
    }
    changeText(val) { // 发出事件监听
        // 方式一：字符串，不推荐，后续的更新会删除
        this.refs.titleRef.innerHTML = val || 'new Home'
        // 方式二：对象 -- 官方推荐
        console.log(this.titleRef.current, '---ref2---')
        this.titleRef.current.innerHTML = val || 'new Home'
        // 方式三：回调函数
        this.titleElement.innerHTML = val || 'new Home'
    }
}

export default class App extends PureComponent {
  constructor() {
    super()
    this.homeRef = createRef()
  }
  render() {
    return (
      <div>
        <Header />
        {/* ref获取自定义组件实例 */}
        <Home ref={this.homeRef} />
        <button onClick={() => this.appClick()}>App改变子组件文本</button>
      </div>
    )
  }
  appClick() { // ref获取自定义组件实例
    console.log(this.homeRef.current, '---app')
    this.homeRef.current.changeText('app文本')
  }
}
