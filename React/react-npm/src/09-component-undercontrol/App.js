import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
        username: '',
        password: '',
        fruit: 'orange'
    }
  }
  render() {
    const { username, password, fruit } = this.state
    return (
      <div>
        <form onSubmit={(e) => {this.handleSubmit(e)}}>
            <label htmlFor="username">
                用户：
                {/* 受控组件 */}
                <input type="text" id='username' value={username} onChange={e => this.handleChangeUsername(e)} />
            </label>
            <br />
            <label htmlFor="password">
                密码：
                {/* 受控组件 */}
                <input type="text" id='password' value={password} onChange={e => this.handleChangePassword(e)} />
            </label>
            <br />
            <label htmlFor="fruits">
                水果：
                <select name="fruits" id="fruits" value={fruit} onChange={e => this.handleChangeFruit(e)}>
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
  handleChangeFruit(e) {
    console.log(e.target, '----changeFruits')
    this.setState({
        fruit: e.target.value
    })
  }

  handleChangePassword(e) {
    console.log(e.target, '----changePassword')
    this.setState({
        password: e.target.value
    })
  }

  handleChangeUsername(e) {
    console.log(e.target, '----changeUsername')
    this.setState({
        username: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state, '-----submit')
  }
}
