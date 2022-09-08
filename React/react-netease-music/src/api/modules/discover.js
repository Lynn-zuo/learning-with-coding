import gatewayAPI from "../gateway-api.js"

// -----------recommend--------------
export const getBannerList = (params) => {
  return gatewayAPI.get("/banner", { params }).then((res) => {
    return res
  })
}

export const getHotList = (params) => {
  return gatewayAPI.get("/personalized", { params }).then((res) => {
    return res
  })
}
