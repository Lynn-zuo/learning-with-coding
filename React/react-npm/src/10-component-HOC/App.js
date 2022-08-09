import React, { createRef, PureComponent } from 'react'
import SubComponent1 from './SubComponent-define.js'
import SubComponent2, { SubComponent3 } from './SubComponent-enhanceProps.js'
import SubComponent4 from './SubComponent-checkLogin.js'
import SubComponent5, { SubComponent6 } from './SubComponent-lifecycle.js'
import FuncSubComponent from './FuncSubComponent'

import { InfoContext } from './withInfoContext.js'

export default class App extends PureComponent {
  constructor() {
    super()
    this.ref1 = createRef()
    this.ref2 = createRef()
    this.ref3 = createRef()
  }
  render() {
    return (
      <div>
        <SubComponent5 ref={this.ref1} />
        <SubComponent6 ref={this.ref2} />
        <FuncSubComponent ref={this.ref3} />
        <button onClick={() => this.printRef()}>打印ref</button>
        <br />
        <SubComponent4 isLogin={true} />
        <SubComponent1 name='类组件' level={90} />
        <InfoContext.Provider value={{ name: 'lynne', age: 25, height: 164 }}>
            <SubComponent2 region='杭州' />
            <SubComponent3 region='上海' />
        </InfoContext.Provider>
      </div>
    )
  }

  printRef () {
    console.log(this.ref1, '----ref1-----')
    console.log(this.ref2, '----ref2-----')
    console.log(this.ref3, '----ref3-----')
  }
}
