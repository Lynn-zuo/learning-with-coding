import { INC, DEC, ADD_NUM, SUB_NUM, REQ_GET, REQ_POST } from './constants.js'
import { testGet, testPost } from "@/api"

export const increment = () => ({
    type: INC
})

export const decrement = () => ({
    type: DEC
})

export const addAction = num => ({
    type: ADD_NUM,
    num
})

export const subAction = num => ({
    type: SUB_NUM,
    num
})

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