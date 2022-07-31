import { Component } from "react"
import TabControl from "./TabControl.js"
import { UserContext } from './userContext'

TabControl.contextType = UserContext

export default class MainBody extends Component {
  static contextType = UserContext
  constructor(props) {
    super(props)
    this.state = {
      curIndex: 0,
    }
  }
  render() {
    // 方式一：props逐层传递
    const { tabTitles } = this.context
    const { curIndex } = this.state
    // 方式二： Context
    console.log(this.context, '---context-body----')
    return (
      <div>
        <TabControl
          // tabTitles={tabTitles} // 单个属性传递
          {...this.props} // 属性展开多个传递
          curIndex={curIndex}
          tabClick={(index) => {
            this.tabClick(index)
          }}
        />
        <div>{tabTitles[curIndex]}</div>
      </div>
    )
  }
  tabClick(index) {
    console.log(index, "----index-app")
    this.setState({
      curIndex: index,
    })
  }
}
