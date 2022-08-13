import React, { PureComponent } from 'react'
import style from './style.module.css' // 3.CSS Module

export default class Footer extends PureComponent {
  render() {
    return ( // 3.CSS Module
      <div>
        <p className={style.title}>Footer</p>
        <p className={style.subTitle}>副标题</p>
        <p className={style.content}>正文</p>
      </div>
    )
  }
}
