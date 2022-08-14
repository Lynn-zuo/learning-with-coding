import { ADD_NUM, SUB_NUM } from './constants.js'

export const addAction = num => ({
    type: ADD_NUM,
    num
})

export const subAction = num => ({
    type: SUB_NUM,
    num
})