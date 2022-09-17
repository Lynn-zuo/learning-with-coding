import React, { memo, useEffect } from 'react'
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import { RankWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '../../store/actionCreators'
import TopRanking from 'components/top-ranking'
import { TopListWrapper } from './style'

const Rank = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopListAction({id:19723756}))
    dispatch(getTopListAction({id:3779629}))
    dispatch(getTopListAction({id:2884035}))
  }, [dispatch])

  const { upRanking = {}, newRanking = {}, originRanking = {} } = useSelector((state) => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking'])
  }), shallowEqual)
  return (
    <RankWrapper>
      <ThemeHeaderRCM title='榜单' />
      <TopListWrapper>
        <TopRanking
          key='upRank'
          rankInfo={upRanking}/>
        <TopRanking
          key='newRank'
          rankInfo={newRanking} />
        <TopRanking
          key='originRank'
          rankInfo={originRanking} />
      </TopListWrapper>
    </RankWrapper>
  )
})

export default Rank