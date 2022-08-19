import { combineReducers } from 'redux'
import { reducer as counterReducer } from './counter'
import { reducer as reqReducer } from './reqData'

const reducer = combineReducers({ // 传入一个对象
    counterInfo: counterReducer, // 传入一个函数
    reqDataInfo: reqReducer // 而不是执行函数返回的结果
})

export default reducer