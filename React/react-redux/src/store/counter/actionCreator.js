import { INC, DEC, ADD_NUM, SUB_NUM } from './constants.js'

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
