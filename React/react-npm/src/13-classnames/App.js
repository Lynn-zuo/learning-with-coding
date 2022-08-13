import React, { PureComponent } from 'react'
import classNames from 'classnames'

export default class App extends PureComponent {
  render() {
    const isActive = true
    const selected = true
    const notActive = null
    const notSelected = undefined
    return (
      <div>
        <h2>App</h2>
        <div className={classNames('title', 'active')}>标题1</div>
        <div className={classNames('title', {active: isActive})}>标题2</div>
        <div className={classNames(['title', {active: isActive, selected: selected}])}>标题3</div>
        <div className={classNames([{title: notSelected}, {active: notActive, selected: notSelected}])}>标题4</div>
      </div>
    )
  }
}
