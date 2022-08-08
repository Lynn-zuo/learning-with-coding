import { createContext } from "react"

// 创建Context对象
export const InfoContext = createContext({
    name: '默认',
    level: -1,
    区域: '中国'
})