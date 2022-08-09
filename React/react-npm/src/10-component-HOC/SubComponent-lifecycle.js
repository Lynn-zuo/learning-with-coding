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

// 高阶组件劫持生命周期
function checkLifecycle(WrapComponent) {
    return class extends PureComponent {
        UNSAFE_componentWillMount() {
            const startTime = new Date()
            console.log(WrapComponent.name, '----start at---', startTime)
        }
        componentDidMount() {
            const endTime = new Date()
            console.log(WrapComponent.name, '----end at---', endTime)
        }
        render() {
            return <WrapComponent {...this.props} />
        }
    }
}

const EnhanceComponent = checkLifecycle(LoginPage)
export const SubComponent6 = checkLifecycle(hasLogin)

export default EnhanceComponent