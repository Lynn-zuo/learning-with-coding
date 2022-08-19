import { REQ_GET, REQ_POST } from './constants.js'

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

export default reqReducer