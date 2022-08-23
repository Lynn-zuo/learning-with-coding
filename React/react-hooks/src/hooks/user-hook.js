import { useContext } from 'react'
import { UserContext, ThemeContext } from '@/context'

export const useUserHook = () => {
    const user = useContext(UserContext)
    const theme = useContext(ThemeContext)
    return [user, theme]
}