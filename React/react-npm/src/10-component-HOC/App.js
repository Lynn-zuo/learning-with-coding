import React, { PureComponent } from 'react'
import SubComponent1 from './SubComponent-define.js'
import SubComponent2 from './SubComponent-enhanceProps.js'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <SubComponent1 name='类组件' level={90} region='杭州' />
        <SubComponent2 name='函数组件' level={99} />
      </div>
    )
  }
}
