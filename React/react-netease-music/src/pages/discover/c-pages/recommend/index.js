import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTopBannerAction } from './store/actionCreators';

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
    <div>Recommend: {topBanners.length}</div>
  )
}

export default memo(Recommend)