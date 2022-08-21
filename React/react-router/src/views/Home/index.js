import React, { PureComponent } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Increment from '../Increment'
import Subtract from '../Subtract'

export default class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <button onClick={() => {this.printRouteInfo()}}>查看route</button>
        <br />
        <NavLink to='increment'>+++</NavLink>
        <NavLink to='subtract'>---</NavLink>
        <Routes>
          <Route path='/' element={<h2>首页展示</h2>}></Route>
          <Route path='/increment' element={<Increment />}></Route>
          <Route path='/subtract' element={<Subtract />}></Route>
        </Routes>
      </div>
    )
  }

  printRouteInfo() { // 版本6移除了location、history和match对象
    console.log(this.props.location, window.location, '-----')
    console.log(this.props.history, '-----')
    console.log(this.props.match, '-----')
  }
}
