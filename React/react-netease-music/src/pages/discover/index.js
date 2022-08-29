import React, { memo, useEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import api from '@/api'

import { discoverTopMenus } from '../../common/local-data';
import { DiscoverWrapper, TopMenuWrapper } from './style';

const Discover = memo(() => {
  useEffect(() => {
    api.Discover.testGet().then(res => {
        console.log(res, '----res--get')
    })
  })
  
  return (
    <DiscoverWrapper>
        <div className="top-menu-wrap">
            <TopMenuWrapper className="wrap-v1">
                <div className="nav-wrap">
                    {discoverTopMenus.map(menu => 
                        <NavLink className='link-menu-item' key={menu.link} to={menu.link}>{menu.title}</NavLink>
                    )}
                </div>
            </TopMenuWrapper>
        </div>
        {/* 展示父路由下的子路由 */}
        <Outlet />
    </DiscoverWrapper>
  )
})

export default Discover