import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { login, logout } from '@/store/user/actionCreator.js'

function Login (props) {
  return (
      <div>
        <h2>Login Page</h2>
        {
            props.isLogin ? 
            <button onClick={() => {props.logout()}}>退出登陆</button>
            : <button onClick={() => {props.login(props, '123')}}>点击登陆</button>
        }
      </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.userInfo.isLogin, '------')
    return {
      // 传入store的getState()函数获取的state
      isLogin: state.userInfo.isLogin, // 这样只在connect中引用一次store
    }
  }
  
  
  const mapDispatchToProp = dispatch => {
    return { // 传入store的dispatch函数
      login: async function(props, userId) {
        await dispatch(login(userId))
        console.log('登录成功', window.location)
        console.log('登录成功', window.history)
        window.location.href = '/home'
        console.log(props.isLogin)
      },
      logout: function() {
        dispatch(logout())
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProp)(Login)