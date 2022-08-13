import React, { PureComponent } from 'react'
import style from './style.module.css' // 3.CSS Module

export default class Footer extends PureComponent {
  render() {
    return ( // 3.CSS Module -- 与styled-components不可一起用
      <div>
        <p className={style.title}>Footer</p>
        <p className={'center' + style.subTitle}>副标题</p>
        <p className={style.content}>正文</p>
      </div>
    )
  }
}
