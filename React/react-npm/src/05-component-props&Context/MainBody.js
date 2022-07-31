import { Component } from "react"
import TabControl from "./TabControl.js"

export default class MainBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curIndex: 0,
    }
  }
  render() {
    const { tabTitles } = this.props
    const { curIndex } = this.state
    return (
      <div>
        <TabControl
          tabTitles={tabTitles}
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
