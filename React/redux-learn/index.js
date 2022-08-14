import store from './store/index.js'
import { addAction, subAction } from './store/actionCreator.js'

// 订阅store的修改 -- 先订阅后触发
store.subscribe(() => {
    console.log('counter', store.getState().counter)
})

store.dispatch(addAction(5))
store.dispatch(addAction(5))
store.dispatch(subAction(5))
store.dispatch(subAction(5))