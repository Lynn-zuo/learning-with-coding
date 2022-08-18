import { combineReducers } from 'redux'
import { reducer as counterReducer } from './counter'
import { reducer as reqReducer } from './reqData'

// reducer
// function reducer(state = {}, action) {
//     return { // 每次都返回一个新的对象
//         counterInfo: counterReducer(state.counterInfo, action),
//         reqDataInfo: reqReducer(state.reqDataInfo, action)
//     }
// }

const reducer = combineReducers({ // 传入一个对象
    counterInfo: counterReducer, // 传入一个函数
    reqDataInfo: reqReducer // 而不是执行函数返回的结果
})

export default reducer