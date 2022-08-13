import React, { PureComponent } from 'react'
import { testGet, testPost } from './api'

export default class App extends PureComponent {
  constructor(props) {
    super()
    this.state = {
        reqData: {},
        resData: {}
    }
  }
  async componentDidMount() {
    const resGet = await testGet({ name: 'lynne', age: '25' })
    const resPost = await testPost({ name: 'lynne', age: '25' })
    console.log(resGet, '------resGet')
    console.log(resPost, '------resPost')
    this.setState({
        reqData: resGet,
        resData: resPost
    })
  }
  render() {
    const { reqData, resData } = this.state
    return (
      <div>
        <h2>App</h2>
        <div>
            <p>data</p>
            <h2>get请求</h2>
            <p>url:  {reqData.url}</p>
            <h2>post请求</h2>
            <p>url:  {resData.url}</p>
            <p>params:  {resData.data}</p>
        </div>
      </div>
    )
  }
}
