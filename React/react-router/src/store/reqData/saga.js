import { takeEvery, put, all } from 'redux-saga/effects'
import { testGet, testPost } from "@/api"
import { REQ_SAGA } from './constants.js'
import { getAction, postAction } from "./actionCreator.js"

function* reqData(action) { // 默认action
    const resGet = yield testGet({ name: "lynne", age: "25" })
    const resPost = yield testPost({ name: "lynne", age: "25" })
    console.log(resGet, resPost, '---saga')
    // yield put(getAction(resGet))
    // yield put(postAction(resPost))
    // all API
    yield all([
        yield put(getAction(resGet)),
        yield put(postAction(resPost))
    ])
}

function* mySaga() { // 要拦截的
    yield takeEvery(REQ_SAGA, reqData)
    // takeEvery -- 每一个都会被执行
    // takeLatest -- 一次只能监听一个，取消上一个，最新触发的一个
    // yield all([ ... ]) 可以触发多个
}

export default mySaga