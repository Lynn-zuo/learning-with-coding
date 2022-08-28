import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from 'classnames'

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

import { HeaderWrapper, ContentLeft, ContentRight } from "./style";
import logo from '@/assets/img/NetEaseMusicLogo.jpg'
import { headerLinks } from "../../common/local-data";

export default memo(function XAppHeader() {
  // 页面代码
  const showLinkItem = link => {
    if (link.link?.includes('http')) {
        return <a href={link.link}>{link.title}</a>
    } else {
        return <NavLink to={link.link}>{link.title}</NavLink>
    }
  }
  const [curLink, setCurLink] = useState('/')
  return (
    <HeaderWrapper>
      <div className='content header-wrap'>
        <ContentLeft>
            <a href="#/">
              <img className="logo" src={logo} alt="logo" />
            </a>
            <div className="nav-links">
                {headerLinks.map(link => <div key={link.link}
                className={classNames('link-item', {active: curLink === link.link})}
                onClick={() => {setCurLink(link.link)}}>
                    {showLinkItem(link)}
                    {curLink === link.link && <div className="icon" />}
                </div>)}
            </div>
        </ContentLeft>
        <ContentRight>
            <Input className="search-input" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
            <button className="btn author-btn">创作者中心</button>
            <a className="btn login-btn" href='#/login'>登陆</a>
        </ContentRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
