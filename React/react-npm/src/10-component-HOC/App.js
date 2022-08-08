import React, { PureComponent } from 'react'
import SubComponent from './SubComponent.js'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <SubComponent name='类组件' />
        <SubComponent name='函数组件' />
      </div>
    )
  }
}
