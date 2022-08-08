import React, { PureComponent } from 'react'
import { InfoContext } from './withInfoContext.js'

class SubComponent extends PureComponent {
  render() {
    const { name, level, region, age, height } = this.props
    return (
      <div>
        <h2>子组件: {name}</h2>
        <p>等级：{ level }</p>
        <p>区域：{ region }</p>
        <p>年龄：{ age }</p>
        <p>身高：{ height }</p>
      </div>
    )
  }
}

class SubComponent_3 extends PureComponent {
  render() {
    const { name, level, region, age, height } = this.props
    return (
      <div>
        <h2>子组件: {name}</h2>
        <ul>
          <li>等级：{ level }</li>
          <li>区域：{ region }</li>
          <li>年龄：{ age }</li>
          <li>身高：{ height }</li>
        </ul>
      </div>
    )
  }
}

// 高阶组件共享context增强props
function withInfo(WrapComponent) {
  return props => {
    return (
      <InfoContext.Consumer>
        {
          info => {
            return <WrapComponent {...props} {...info} />
          }
        }
      </InfoContext.Consumer>
    )
  }
}

const EnhanceComponent = withInfo(SubComponent)
export const SubComponent3 = withInfo(SubComponent_3)

export default EnhanceComponent