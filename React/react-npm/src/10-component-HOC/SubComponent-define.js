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
    // return class NewComponent extends PureComponent {
    // return class extends PureComponent { // 省略后，16版本为父组件名PureComponent，18版本为Anonymous
    class NewComponent extends PureComponent { // 省略后，16版本为父组件名PureComponent，18版本为Anonymous
        render() {
            return <SubComponent {...this.props} />
        }
    }
    NewComponent.displayName = 'Wrap' // devtools展示组件名为Wrap
    return NewComponent
}

// 高阶组件定义方式 -- 函数式组件
// function enhanceComponent(Component) {
//     function NewComponent (props) { // 省略后，16版本为父组件名PureComponent，18版本为Anonymous
//         return <SubComponent {...props} />
//     }
//     NewComponent.displayName = 'Wrap' // devtools展示组件名为Wrap
//     return NewComponent
// }

const EnhanceComponent = enhanceComponent(SubComponent)

export default EnhanceComponent