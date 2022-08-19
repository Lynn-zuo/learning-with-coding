import React, { PureComponent } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from '@/views/Home'
import About from '@/views/About'
import Request from '@/views/Request'


export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">主页</Link>
        <Link to="/home">首页++</Link>
        <Link to="/about">关于--</Link>
        <Link to="/request">请求数据</Link>

        <Routes>
          {/* react-router版本6开始必须 Routes 组件包裹，且component属性更新为element */}
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/request' element={<Request />}></Route>
        </Routes>
        <hr />
        <br />
      </BrowserRouter>
    )
  }
}
