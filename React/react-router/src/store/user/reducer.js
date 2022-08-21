import { LOGIN, LOGOUT } from './constants.js'

const initialUserInfo = {
    userId: '',
    isLogin: false
}

function userReducer(state = initialUserInfo, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, userId: action.userId, isLogin: true }
        case LOGOUT:
            return { ...state, userId: '', isLogin: false }
        default: return state
    }
}

export default userReducer