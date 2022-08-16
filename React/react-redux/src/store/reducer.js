import { INC, DEC, ADD_NUM, SUB_NUM, REQ_GET, REQ_POST } from './constants.js'

const initialState = {
    counter: 0,
    getData: {},
    postData: {}
}

// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case INC:
            return { ...state, counter: state.counter + 1 }
        case DEC:
            return { ...state, counter: state.counter - 1 }
        case ADD_NUM:
            return { ...state, counter: state.counter + action.num }
        case SUB_NUM:
            return { ...state, counter: state.counter - action.num }
        case REQ_GET:
            return { ...state, getData: action.getData }
        case REQ_POST:
            return { ...state, postData: action.postData }
        default: return state
    }
}

export default reducer