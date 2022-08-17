import { INC, DEC, ADD_NUM, SUB_NUM, REQ_GET, REQ_POST } from './constants.js'

const initialCountInfo = {
    counter: 0
}

// 拆分counterReducer
function counterReducer(state = initialCountInfo, action) {
    switch (action.type) {
        case INC:
            return { ...state, counter: state.counter + 1 }
        case DEC:
            return { ...state, counter: state.counter - 1 }
        case ADD_NUM:
            return { ...state, counter: state.counter + action.num }
        case SUB_NUM:
            return { ...state, counter: state.counter - action.num }
        default: return state
    }
}

const initialReqDataInfo = {
    getData: {},
    postData: {}
}
// 拆分reqReducer
function reqReducer(state = initialReqDataInfo, action) {
    switch (action.type) {
        case REQ_GET:
            return { ...state, getData: action.getData }
        case REQ_POST:
            return { ...state, postData: action.postData }
        default: return state
    }
}

// reducer
function reducer(state = {}, action) {
    return {
        counterInfo: counterReducer(state.counterInfo, action),
        reqDataInfo: reqReducer(state.reqDataInfo, action)
    }
}

export default reducer