import * as actionTypes from './constants'
import api from '@/api'

const changeCurrentSongAction = (res) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong: res?.songs[0] || {}
})
export const getCurrentSongAction = (params) => {
    return dispatch => {
        api.Player.getSongDetail(params).then(res => {
            dispatch(changeCurrentSongAction(res))
        })
    }
}
