import { Component } from "react"
import NavBar from './NavBar.js'
import TabControl from './TabControl.js'

export default class App extends Component {
  constructor(props) {
    super()

    // 固定死不变的数据可以直接定义在state外面
    // this.tabTitles = ['新款', '精选', '流行']
    this.state = {
      tabTitles: ['新款', '精选', '流行'],
      curIndex: 0
    }
  }
  render() {
    const { tabTitles, curIndex } = this.state
    return (
      <div>
        <NavBar>
          <div>left</div>
          <div>center</div>
          <div>right</div>
        </NavBar>
        <NavBar leftSlot={<div>left2</div>}
                centerSlot={<div>center2</div>}
                rightSlot={<div>right2</div>} />
        <TabControl tabTitles={tabTitles} curIndex={curIndex} tabClick={(index) => {this.tabClick(index)}} />
        <div>{ tabTitles[curIndex] }</div>
      </div>
    )
  }
  tabClick(index) {
    console.log(index, '----index-app')
    this.setState({
      curIndex: index
    })
  }
}
