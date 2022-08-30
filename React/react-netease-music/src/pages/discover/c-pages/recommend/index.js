import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux';
import { getTopBannerAction } from './store/actionCreators';

const Recommend = (props) => {
  const { getBanners, topBanners } = props
  useEffect(() => {
    getBanners({type: 2})
  }, [getBanners])
  return (
    <div>Recommend: {topBanners.length}</div>
  )
}

const mapStateToProps = state => ({
    topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
    getBanners: (params) => {
        dispatch(getTopBannerAction(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))