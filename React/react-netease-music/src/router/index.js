import { Navigate, useRoutes } from 'react-router-dom';

import Discover from '@/pages/discover';
import Friend from '@/pages/friend';
import Mine from '@/pages/mine';
import NotFound from '@/pages/404'

const routes = [{
    path: '/',
    element: <Navigate to='/discover' />
}, {
    path: '/discover',
    element: <Discover />
}, {
    path: '/friend',
    element: <Friend />
}, {
    path: '/mine',
    element: <Mine />
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