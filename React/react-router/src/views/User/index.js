import React, { PureComponent } from "react"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"

class User extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return this.props.isLogin ? <div>
        <h2>User</h2>
        <p>用户信息</p>
    </div> : <Navigate to='/login' />
  }
}

const mapStateToProps = (state) => {
  return {
    // 传入store的getState()函数获取的state
    isLogin: state.userInfo.isLogin, // 这样只在connect中引用一次store
  }
}

export default connect(mapStateToProps)(User)
