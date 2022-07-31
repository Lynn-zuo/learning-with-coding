import { createContext } from "react"

// 创建Context对象
export const UserContext = createContext({
    tabTitles: ["tab1", "tab2", "tab3"]
})