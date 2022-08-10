import React, { PureComponent } from 'react'

export default class CommonMode extends PureComponent {
  UNSAFE_componentWillMount() {
    console.log('test will mount')
  }
  render() {
    return (
      <div>CommonMode</div>
    )
  }
}
