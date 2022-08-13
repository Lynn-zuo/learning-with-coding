import React, { PureComponent } from 'react'

import Header from '../Header'
import Home from '../Home'
import Banner  from '../Banner'
import Footer from '../Footer'
import { ThemeProvider, StyledWrapper, StyledInput, StyleBtn1, StyleBtn2 } from './style.js'

export default class StyleComponents extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red'
    }
  }
  render() {
    return (
      <StyledWrapper>
        <h2>StyleComponents</h2>
        <Header />
        <Banner />
        <Home />
        <Footer />
        <input type="text" />
        <hr />
        {/* styled-components 属性穿透 + attributes属性方法参数 */}
        <StyledInput type='password' placeholder='lynne' color={this.state.color} />
        <hr />
        <ThemeProvider theme={{ themeColor: 'yellow', fontSize: '18px' }}>
          <StyleBtn1>左边按钮</StyleBtn1>
          <StyleBtn2>右边按钮</StyleBtn2>
        </ThemeProvider>
      </StyledWrapper>
    )
  }
}
