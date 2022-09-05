import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTopBannerAction } from './store/actionCreators';
import Banner from './components/banner'
import HotRCM from './components/hot-rcm'
import NewRCM from './components/new-rcm'
import Rank from './components/rank'
import { RecommendWrapper,
         RecommendContentWrapper,
         RecommendLeftWrapper,
         RecommendRightWrapper } from './style'

const Recommend = (props) => {
  // 组件和redux关联：获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get('recommend').get('topBanners')
    topBanners: state.getIn(['recommend', 'topBanners'])
  }))
  const dispatch = useDispatch()
  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction({type: 0}))
  }, [dispatch]) // []放入需要当发生改变时组件会重新渲染
  return (
    <RecommendWrapper>
      <Banner banners={topBanners} />
      <RecommendContentWrapper>
        <RecommendLeftWrapper>
          <HotRCM />
          <NewRCM />
          <Rank />
        </RecommendLeftWrapper>
        <RecommendRightWrapper>right</RecommendRightWrapper>
      </RecommendContentWrapper>
    </RecommendWrapper>
  )
}

export default memo(Recommend)