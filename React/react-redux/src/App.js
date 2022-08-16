import React, { PureComponent, Fragment } from 'react'
import Home from '@/views/Home'
import About from '@/views/About'
import Redux from './views/Redux'

export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <About />
        <hr />
        <Home />
        <hr />
        <Redux />
      </Fragment>
    )
  }
}
