import React, { PureComponent } from "react"
import { Navigate } from "react-router-dom"

export default class User extends PureComponent {
  constructor(props) {
    super()
    this.state = {
      isLogin: false,
    }
  }
  render() {
    return this.state.isLogin ? (
      <div>User</div>
    ) : <Navigate to='/login' />
  }
}
