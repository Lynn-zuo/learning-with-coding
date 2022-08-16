import { INC, DEC, ADD_NUM, SUB_NUM, REQ_GET, REQ_POST } from './constants.js'

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