import { Component } from "react"
import NavBar from "./NavBar.js"
// import MainBody from "./MainBody-props.js"
import MainBody from "./MainBody-context.js"
import { UserContext } from "./userContext.js"

export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      tabTitles: ["新款", "精选", "流行"],
    }
  }
  render() {
    // const { tabTitles } = this.state
    return (
      <div>
        <NavBar
          leftSlot={<div>left2</div>}
          centerSlot={<div>center2</div>}
          rightSlot={<div>right2</div>}
        />
        {/* 跨组件通信方式一：逐层传递props */}
        {/* <MainBody tabTitles={tabTitles} /> */}
        {/* 跨组件通信方式二：Context */}
        <UserContext.Provider value={this.state}>
          <MainBody />
        </UserContext.Provider>
      </div>
    )
  }
}
