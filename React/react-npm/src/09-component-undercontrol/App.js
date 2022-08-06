import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.usernameRef = createRef()
    this.passwordRef = createRef()
    this.fruitRef = createRef()
  }
  render() {
    // const { username, password, fruit } = this.state
    return (
      <div>
        {/*  非受控组件 */}
        <form onSubmit={(e) => {this.handleSubmit(e)}}>
            <label htmlFor="username">
                用户：
                <input ref={this.usernameRef} type="text" id='username' name='username' />
            </label>
            <br />
            <label htmlFor="password">
                密码：
                {/* 非受控组件 */}
                <input ref={this.passwordRef} type="text" id='password' name='password' />
            </label>
            <br />
            <label htmlFor="fruit">
                水果：
                <select ref={this.fruitRef} name="fruit" id="fruit">
                    <option value="apple">苹果</option>
                    <option value="banana">香蕉</option>
                    <option value="orange">橘子</option>
                </select>
            </label>
            <input type="submit" value='提交' />
        </form>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.usernameRef.current.value, '-----username')
    console.log(this.passwordRef.current.value, '-----password')
    console.log(this.fruitRef.current.value, '-----fruit')
  }
}
