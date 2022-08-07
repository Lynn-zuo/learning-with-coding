import React, { PureComponent } from 'react'
import SubComponent from './SubComponent.js'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <SubComponent />
      </div>
    )
  }
}
