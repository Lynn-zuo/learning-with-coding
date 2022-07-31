import { Component } from "react"
import NavBar from "./NavBar.js"
import MainBody from "./MainBody.js"

export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      tabTitles: ["新款", "精选", "流行"],
    }
  }
  render() {
    const { tabTitles } = this.state
    return (
      <div>
        <NavBar
          leftSlot={<div>left2</div>}
          centerSlot={<div>center2</div>}
          rightSlot={<div>right2</div>}
        />
        <MainBody tabTitles={tabTitles} />
      </div>
    )
  }
}
