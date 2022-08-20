import React, { PureComponent } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Increment from '../Increment'
import Subtract from '../Subtract'

export default class Home extends PureComponent {
  render() {
    return (
      <div>
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
}
