import { reducer as counterReducer } from './counter'
import { reducer as reqReducer } from './reqData'

// reducer
function reducer(state = {}, action) {
    return {
        counterInfo: counterReducer(state.counterInfo, action),
        reqDataInfo: reqReducer(state.reqDataInfo, action)
    }
}

export default reducer