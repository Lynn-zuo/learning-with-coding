import {legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer.js'

// 应用一些中间件
const storeEnhancer = applyMiddleware(thunkMiddleware)

// store -- 创建的时候需要传入一个reducer纯函数
const store = createStore(reducer, storeEnhancer)

export default store