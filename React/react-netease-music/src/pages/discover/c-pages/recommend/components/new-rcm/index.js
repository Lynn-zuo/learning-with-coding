import React, { memo } from 'react'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import { NewRCMWrapper } from './style'

const NewRCM = memo(() => {
  return (
    <NewRCMWrapper>
      <ThemeHeaderRCM title='新碟上架' />
    </NewRCMWrapper>
  )
})

export default NewRCM