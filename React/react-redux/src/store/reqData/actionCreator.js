import { REQ_GET, REQ_POST, REQ_SAGA } from './constants.js'
import { testGet, testPost } from "@/api"

export const getAction = (getData) => ({
    type: REQ_GET,
    getData
})

export const postAction = (postData) => ({
    type: REQ_POST,
    postData
})

// redux-thunk中定义的action函数
export const thunkRequestAction = async (dispatch, getState) => {
    const resGet = await testGet({ name: "lynne", age: "25" })
    const resPost = await testPost({ name: "lynne", age: "25" })
    dispatch(getAction(resGet))
    dispatch(postAction(resPost))
}

// redux-saga拦截的action
export const sagaRequestAction = {
    type: REQ_SAGA
}
