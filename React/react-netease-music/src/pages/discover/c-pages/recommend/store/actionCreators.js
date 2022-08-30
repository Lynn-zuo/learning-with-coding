import * as actionTypes from './constants'
import api from '@/api'

const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})
export const getTopBannerAction = (params) => {
    return dispatch => {
        api.Discover.getBannerList(params).then(res => {
            dispatch(changeTopBannerAction(res))
        })
    }
}
