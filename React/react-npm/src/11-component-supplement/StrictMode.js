import React, { PureComponent } from 'react'

export default class StrictMode extends PureComponent {
  componentWillMount() { // 非严格模式下警告
    console.log('test will mount')
  }
  UNSAFE_componentWillMount() { // 非严格模式下不警告，严格模式下警告
    console.log('test unsafe will mount')
  }
  render() {
    return (
      <div>StrictMode</div>
    )
  }
}
