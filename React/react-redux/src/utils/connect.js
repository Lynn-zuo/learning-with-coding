import React, { PureComponent } from "react"
import { storeContext } from "./context"

export function connect(mapStateToProps, mapDispatchToProp) {
  return function enhanceHOC(WrapComponent) { // 返回函数是一个高阶组件
    class enhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props)
        this.state = {
          storeState: mapStateToProps(context.getState()),
        }
      }
      componentDidMount() { // 订阅通知渲染
        this.subscribe = this.context.subscribe(() => {
            this.setState({
                storeState: mapStateToProps(this.context.getState())
            })
        })
      }
      componentWillUnmount() {
        this.subscribe()
      }
      render() {
        return (
          <WrapComponent
            {...this.props}
            {...mapStateToProps(this.context.getState())} // 传入的是属性
            {...mapDispatchToProp(this.context.dispatch)} // 传入的是函数
          />
        )
      }
    }

    enhanceComponent.contextType = storeContext
    return enhanceComponent
  }
}
