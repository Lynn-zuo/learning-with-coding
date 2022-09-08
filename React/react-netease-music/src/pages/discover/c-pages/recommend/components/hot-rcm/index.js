import React, { memo, useEffect } from 'react'
import { HotRCMMenus } from '@/common/local-data.js'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommendAction } from '../../store/actionCreators'
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import SongCover from '@/components/song-cover'
import { HotRCMWrapper, HotRCMContentWrapper } from './style'

const HotRCM = memo(() => {
  const { hotRecommends = [] } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendAction({limit: 8}))
  }, [dispatch])
  
  return (
    <HotRCMWrapper>
      <ThemeHeaderRCM title='热门推荐' menus={HotRCMMenus} />
      <HotRCMContentWrapper>
        { hotRecommends.map(recommend =>
          <SongCover key={recommend.id}
            picUrl={recommend.picUrl}
            playCount={recommend.playCount}
            name={recommend.name}
            author={recommend.author} />) }
      </HotRCMContentWrapper>
    </HotRCMWrapper>
  )
})

export default HotRCM