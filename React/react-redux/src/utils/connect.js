import React, { PureComponent } from "react"
import store from "@/store/index.js"

export function connect(mapStateToProps, mapDispatchToProp) {
  return function enhanceHOC(WrapComponent) { // 返回函数是一个高阶组件
    return class extends PureComponent {
      constructor(props) {
        super(props)
        this.state = {
          storeState: mapStateToProps(store.getState()),
        }
      }
      componentDidMount() {
        this.subscribe = store.subscribe(() => {
            this.setState({
                storeState: mapStateToProps(store.getState())
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
            {...mapStateToProps(store.getState())} // 传入的是属性
            {...mapDispatchToProp(store.dispatch)} // 传入的是函数
          />
        )
      }
    }
  }
}
