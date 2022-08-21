
import Main from '@/views/Main'
import Home from '@/views/Home'
import Increment from '@/views/Increment'
import Subtract from '@/views/Subtract'

import User from '@/views/User'
import Login from '@/views/Login'
import NotFound from '@/views/404'

// V6引用了react-router5的Switch组件，因此react-route-config不可用

const routes = [{
    path: '/',
    component: Main
}, {
    path: '/home',
    component: Home,
    routes: [{
        path: '/increment',
        component: Increment
    }, {
        path: '/subtract',
        component: Subtract
    }]
}, {
    path: '/user/:id',
    component: User
}, {
    path: '/login',
    component: Login
}, {
    path: '*',
    component: NotFound
}]

export default routes