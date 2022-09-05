import React, { memo } from 'react'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import { RankWrapper } from './style'

const Rank = memo(() => {
  return (
    <RankWrapper>
      <ThemeHeaderRCM title='榜单' />
    </RankWrapper>
  )
})

export default Rank