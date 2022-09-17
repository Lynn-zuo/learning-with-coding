import gatewayAPI from "../gateway-api.js"

// -----------recommend--------------
// 轮播图
export const getBannerList = (params) => {
  return gatewayAPI.get("/banner", { params }).then((res) => {
    return res
  })
}
// 热门推荐
export const getHotList = (params) => {
  return gatewayAPI.get("/personalized", { params }).then((res) => {
    return res
  })
}
// 新碟上架
export const getHotNewest = (params) => {
  return gatewayAPI.get("/album/newest", { params }).then((res) => {
    return res
  })
}
// 热门榜单
export const getHotTopList = (params) => {
  return gatewayAPI.get("/playlist/detail", { params }).then((res) => {
    return res
  })
}
