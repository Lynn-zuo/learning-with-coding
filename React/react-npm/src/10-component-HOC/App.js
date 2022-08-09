import React, { PureComponent } from 'react'
import SubComponent1 from './SubComponent-define.js'
import SubComponent2, { SubComponent3 } from './SubComponent-enhanceProps.js'
import SubComponent4 from './SubComponent-checkLogin.js'
import SubComponent5, { SubComponent6 } from './SubComponent-lifecycle.js'

import { InfoContext } from './withInfoContext.js'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <SubComponent5 />
        <SubComponent6 />
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
}
