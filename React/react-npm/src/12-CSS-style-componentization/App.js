import React, { PureComponent } from 'react'
import Header from './Header'
import Home from './Home'
import Banner  from './Banner'
import Footer from './Footer'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <Header />
        <Banner />
        <Home />
        <Footer />
      </div>
    )
  }
}
