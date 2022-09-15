import React, { memo, useEffect } from 'react'
import API from '@/api'
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import { RankWrapper } from './style'

const Rank = memo(() => {
  useEffect(() => {
    API.Discover.getHotTopList({
        limit: 10,
        offset: 10
    }).then(res => {
        console.log(res, '---res----')
    })
  }, [])
  
  return (
    <RankWrapper>
      <ThemeHeaderRCM title='榜单' />
    </RankWrapper>
  )
})

export default Rank