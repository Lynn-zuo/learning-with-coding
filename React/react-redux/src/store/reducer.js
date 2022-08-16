import { INC, DEC, ADD_NUM, SUB_NUM } from './constants.js'

const initialState = {
    counter: 0
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
        default: return state
    }
}

export default reducer