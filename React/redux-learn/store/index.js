import {legacy_createStore as createStore} from 'redux'
import reducer from './reducer.js'

// store -- 创建的时候需要传入一个reducer纯函数
const store = createStore(reducer)

export default store