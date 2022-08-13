import React, { PureComponent } from 'react'

export default class Header extends PureComponent {
  render() {
    return ( // 1.内联样式
      <div className='title' style={{fontSize: '24px', color: 'red'}}>Header标题</div>
    )
  }
}
