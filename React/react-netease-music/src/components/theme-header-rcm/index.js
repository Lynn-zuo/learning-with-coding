import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { ThemeHeaderRCMWrapper,
         ThemeHeaderLeftWrapper,
         ThemeHeaderRightWrapper } from './style'
import circle from '@/assets/img/red-circle.jpg'

const ThemeHeaderRCM = memo((props) => {
  const { title, menus } = props
  return (
    <ThemeHeaderRCMWrapper>
        <ThemeHeaderLeftWrapper>
            <img src={circle} alt="circle" />
            <span className='title'>{ title }</span>
            <div className="nav-list">
                {menus?.map((menu, menuIndex) => <a href={menu.link} key={menu.link}>{menu.title}
                                {(menuIndex < (props.menus?.length-1)) && (<span>|</span>)}</a>)}
            </div>
        </ThemeHeaderLeftWrapper>
        <ThemeHeaderRightWrapper>
            更多<div className='arrow-right' />
        </ThemeHeaderRightWrapper>
    </ThemeHeaderRCMWrapper>
  )
})

ThemeHeaderRCM.propTypes = {
    title: PropTypes.string.isRequired,
    menus: PropTypes.array
}
ThemeHeaderRCM.defaultProps = {
    menus: []
}


export default ThemeHeaderRCM