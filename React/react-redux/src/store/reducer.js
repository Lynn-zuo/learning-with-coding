const initialState = {
    counter: 0
}

// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 }
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 }
        case 'ADD_NUMBER':
            return { ...state, counter: state.counter + action.num }
        case 'SUB_NUMBER':
            return { ...state, counter: state.counter - action.num }
        default: return state
    }
}

export default reducer