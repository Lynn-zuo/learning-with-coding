import React, { PureComponent } from 'react'
import { BrowserRouter, Link, NavLink, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '@/views/Home'
import About from '@/views/About'
import Request from '@/views/Request'


export default class App extends PureComponent {
  constructor(props) {
    super()
    this.state = {
      navTitles: [{
        path: '/', name: '主页'
      }, {
        path: '/home', name: '首页++'
      }, {
        path: '/about', name: '关于--'
      }, {
        path: '/request', name: '请求数据'
      }],
      curPath: ''
    }
  }
  render() {
    const { navTitles, curPath } = this.state
    return (
      <BrowserRouter>
        {/* <Link to="/">主页</Link>
        <Link to="/home">首页++</Link>
        <Link to="/about">关于--</Link>
        <Link to="/request">请求数据</Link> */}
        {/* 设置样式：手动获取当前选中项，加自定义类名 */}
        { navTitles.map(title => <Link key={title.path}
                                 to={title.path} 
                                 className={ title.path === curPath ? 'link-active' : '' }
                                 onClick={() => {this.getCur(title.path)}}>{title.name}</Link>) }
        <hr />

        {/* 设置样式：NavLink组件自动获取选中项，默认加类名active */}
        { navTitles.map(title => <NavLink key={title.path}
                                 to={title.path}
                                 onClick={() => {this.getCur(title.path)}}>{title.name}</NavLink>) }

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
  getCur (path) {
    this.setState({
      curPath: path
    })
  }
}
