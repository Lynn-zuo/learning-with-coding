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

const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMENDS,
    hotRecommends: res.result
})
export const getHotRecommendAction = (params) => {
    return dispatch => {
        api.Discover.getHotList(params).then(res => {
           dispatch(changeHotRecommendAction(res))
        })
    }
}

const changeAlbumNewestAction = (res) => ({
    type: actionTypes.CHANGE_ALBUM_NEWEST,
    albumNewest: res.albums
})
export const getAlbumNewestAction = (params) => {
    return dispatch => {
        api.Discover.getHotNewest(params).then(res => {
           dispatch(changeAlbumNewestAction(res))
        })
    }
}

const changeUpRankingAction = (res) => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist
})
const changeNewRankingAction = (res) => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res.playlist
})
const changeOriginRankingAction = (res) => ({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist
})
export const getTopListAction = (params) => {
    return dispatch => {
        api.Discover.getHotTopList(params).then(res => {
           switch (params.id) {
            case 19723756:
              return dispatch(changeUpRankingAction(res))
            case 3779629:
              return dispatch(changeNewRankingAction(res))
            case 2884035:
              return dispatch(changeOriginRankingAction(res))
            default:
              return
           }
        })
    }
}