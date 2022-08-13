import React, { PureComponent, Fragment } from 'react'
import './style.css'

export default class Home extends PureComponent {
  constructor(props) {
    super()
    this.state = { // 1.内联样式
      pStyle: {
        color: 'blue'
      }
    }
  }
  render() {
    const hStyle = { // 1.内联样式
      fontSize: '24px',
      color: 'red'
    }
    const {pStyle} = this.state
    return (
      <Fragment>
        <div className='title' style={hStyle}>home组件</div>
        <p style={pStyle}>内联样式</p>
      </Fragment>
    )
  }
}
