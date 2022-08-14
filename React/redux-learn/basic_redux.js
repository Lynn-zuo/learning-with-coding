import {legacy_createStore as createStore} from 'redux'

// state
const initialState = {
    counter: 0
}

// store -- 创建的时候需要传入一个reducer纯函数
const store = createStore(reducer)

// actions
const action1 = { type: 'INCREMENT'}
const action2 = { type: 'DECREMENT'}
const action3 = { type: 'ADD_NUMBER', num: 2}
const action4 = { type: 'SUB_NUMBER', num: 3}

// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 }
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 }
        case 'ADD_NUMBER':
            return { ...state, counter: state.counter + action.num }
        case 'SUB_NUMBER':
            return { ...state, counter: state.counter - action.num }
        default: return state
    }
}

// 订阅store的修改 -- 先订阅后触发
store.subscribe(() => {
    console.log('counter', store.getState().counter)
})

// 派发action
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)
// console.log(store, '-----store----')