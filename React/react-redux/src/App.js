import React, { PureComponent, Fragment } from 'react'
import Home from '@/views/Home'
import About from '@/views/About'

export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <About />
        <hr />
        <Home />
      </Fragment>
    )
  }
}
