import React, { PureComponent } from 'react'
import { EventEmitter } from 'events'

const eventBus = new EventEmitter();

class Header extends PureComponent {
    render() {
        return (
            <h2>Header</h2>
        )
    }
}
class Home extends PureComponent {

    componentDidMount() { // 添加事件监听
        eventBus.addListener('sayHello', this.handleSayHelloListener)
    }

    componentWillUnmount() { // 取消事件监听
        eventBus.removeListener('sayHello')
    }

    handleSayHelloListener(...args) { // 事件监听函数回调
        console.log(args)
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <button onClick={() => { this.emitEvent() }}>获取事件监听</button>
            </div>
        )
    }
    emitEvent() { // 发出事件监听
        eventBus.emit('sayHello', 'hello home', 123)
    }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}
