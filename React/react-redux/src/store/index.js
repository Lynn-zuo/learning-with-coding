import {legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer.js'

// 添加redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

// 应用一些中间件
const storeEnhancer = applyMiddleware(thunkMiddleware)

// store -- 创建的时候需要传入一个reducer纯函数
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(storeEnhancer))

export default store