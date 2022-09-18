import gatewayAPI from "../gateway-api.js"

// -----------plyer--------------
// 歌曲详情
export const getSongDetail = (params) => {
  return gatewayAPI.get("/song/detail", { params }).then((res) => {
    return res
  })
}