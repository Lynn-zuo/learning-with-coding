import { Component } from "react"

export default class NavBar extends Component {
  constructor(props) {
    super()
  }
  render() {
    const { children, leftSlot, centerSlot, rightSlot } = this.props || {}
    return (
      <div className='nav-bar'>
        {children && children[0] && (
          <div className='nav-item nav-left'>{children[0]}</div>
        )}
        {children && children[1] && (
          <div className='nav-item nav-center'>{children[1]}</div>
        )}
        {children && children[2] && (
          <div className='nav-item nav-right'>{children[2]}</div>
        )}
        {leftSlot && <div className='nav-item nav-left'>{leftSlot}</div>}
        {centerSlot && <div className='nav-item nav-center'>{centerSlot}</div>}
        {rightSlot && <div className='nav-item nav-right'>{rightSlot}</div>}
      </div>
    )
  }
}
