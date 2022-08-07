import React, { PureComponent } from 'react'

class SubComponent extends PureComponent {
  render() {
    return (
      <div>
        <h2>子组件</h2>
      </div>
    )
  }
}

// 高阶组件定义方式
function enhanceComponent(Component) {
    // return class NewComponent extends PureComponent {
    // return class extends PureComponent { // 省略后，16版本为父组件名PureComponent，18版本为Anonymous
    class NewComponent extends PureComponent { // 省略后，16版本为父组件名PureComponent，18版本为Anonymous
        render() {
            return <Component />
        }
    }
    NewComponent.displayName = 'Wrap' // devtools展示组件名为Wrap
    return NewComponent
}

const EnhanceComponent = enhanceComponent(SubComponent)

export default EnhanceComponent