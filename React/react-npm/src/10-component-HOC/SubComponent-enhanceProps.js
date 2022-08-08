import React, { PureComponent } from 'react'

class SubComponent extends PureComponent {
  render() {
    const { name, level, region } = this.props
    return (
      <div>
        <h2>子组件: {name}</h2>
        <p>等级：{ level }</p>
        <p>区域：{ region }</p>
      </div>
    )
  }
}

// 高阶组件定义方式 -- 类组件
function enhanceComponent(Component) {
    class NewComponent extends PureComponent {
        render() { // 应用一: 增强props
            return <SubComponent {...this.props} region='上海' />
        }
    }
    NewComponent.displayName = 'Wrap' // devtools展示组件名为Wrap
    return NewComponent
}


const EnhanceComponent = enhanceComponent(SubComponent)

export default EnhanceComponent