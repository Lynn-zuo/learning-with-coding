import {legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer.js'
import saga from './reqData/saga.js'

// 添加redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

// 应用一些中间件
// 1.引入thunkMiddleware中间件
// 2.创建sgaMiddleware中间件
const sagaMiddleware = createSagaMiddleware()
// 应用中间件
const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware)
// store -- 创建的时候需要传入一个reducer纯函数
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(storeEnhancer))

// 3.调用sagaMiddleware的run方法使能够拦截dispatch的action
sagaMiddleware.run(saga)

export default store