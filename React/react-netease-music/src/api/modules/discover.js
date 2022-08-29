import gatewayAPI from "../gateway-api.js"

export const testGet = (params) => {
  return gatewayAPI.get("/get", { params }).then((res) => {
    return res
  })
}

export const testPost = (params) => {
  return gatewayAPI.post("/post", params).then((res) => {
    return res
  })
}
