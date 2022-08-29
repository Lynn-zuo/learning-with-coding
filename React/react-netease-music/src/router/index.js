import { Navigate, useRoutes } from 'react-router-dom';

import Discover from '@/pages/discover';
import discoverChildren from './discoverChildren';
import Friend from '@/pages/friend';
import Mine from '@/pages/mine';
import Download from '@/pages/download';
import Login from '@/pages/login';
import NotFound from '@/pages/404';

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