import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import discoverChildren from './discoverChildren';
// 路由懒加载
const Discover = React.lazy(_ => import('@/pages/discover'));
const Friend = React.lazy(_ => import('@/pages/friend'));
const Mine = React.lazy(_ => import('@/pages/mine'));
const Download = React.lazy(_ => import('@/pages/download'));
const Login = React.lazy(_ => import('@/pages/login'));
const NotFound = React.lazy(_ => import('@/pages/404'));

const routes = [{
    path: '/',
    element: <Navigate to='/discover' />
}, {
    path: '/discover',
    element: <Discover />,
    children: discoverChildren
}, {
    path: '/friend',
    element: <Friend />
}, {
    path: '/mine',
    element: <Mine />
}, {
    path: '/download',
    element: <Download />
}, {
    path: '/login',
    element: <Login />
}, {
    path: '/404',
    element: <NotFound />
}, {
    path: '*',
    element: <Navigate to='/404' />
}]

const Router = () => {
    return useRoutes(routes)
}

export default Router