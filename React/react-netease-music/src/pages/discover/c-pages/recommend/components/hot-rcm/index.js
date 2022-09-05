import React, { memo } from 'react'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import { HotRCMMenus } from '@/common/local-data.js'
import { HotRCMWrapper } from './style'

const HotRCM = memo(() => {
  return (
    <HotRCMWrapper>
      <ThemeHeaderRCM title='热门推荐' menus={HotRCMMenus} />
    </HotRCMWrapper>
  )
})

export default HotRCM