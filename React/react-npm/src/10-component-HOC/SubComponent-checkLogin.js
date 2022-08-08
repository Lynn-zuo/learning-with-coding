import React, { PureComponent } from 'react'

class hasLogin extends PureComponent {
    render() {
        return <h2>欢迎回来～</h2>
    }
}

class LoginPage extends PureComponent {
    render() {
        return <h2>请先登录</h2>
    }
}

// 高阶组件渲染判断鉴权
function checkLogin(WrapComponent) {
    return props => {
        if (props.isLogin) {
            return <WrapComponent />
        } else {
            return <LoginPage />
        }
    }
}

const EnhanceComponent = checkLogin(hasLogin)

export default EnhanceComponent