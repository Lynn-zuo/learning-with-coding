import React, { memo, useState, useCallback, useRef } from 'react'
import { Carousel } from 'antd';

import recommendDownload from '@/assets/img/recommend-download.jpg';
import { BannerWrapper, ItemWrapper } from './style';
const Banner = memo((props) => {
  const { banners } = props
  const [curIndex, setCurIndex] = useState(0)

  const changeBgImg = useCallback(
    (from, to) => {
      setCurIndex(to)
    }, [])

  const carouselRef = useRef()
  const changePrev = () => {
    carouselRef.current.prev()
  }
  const changeNext = () => {
    carouselRef.current.next()
  }
  
  return (
    <BannerWrapper bgImg={banners[curIndex]?.imageUrl + '?imageView&blur=40x20'}>
      <div className="banner-box">
        <div className="banner-left">
          <Carousel ref={carouselRef} effect="fade" beforeChange={(from, to) => {changeBgImg(from, to)}}>
            { banners.map(banner => <ItemWrapper key={banner.targetId}>
                <div className="banner-item">
                  <img src={banner.imageUrl} alt="banner" />
                </div>
            </ItemWrapper>) }
          </Carousel>
        </div>
        <div className="banner-right">
          <img className="recommend-download" src={recommendDownload} alt="download" />
        </div>
        <div className="banner-btn-group">
          <span className="btn btn-prev" onClick={() => changePrev()} />
          <span className="btn btn-next" onClick={() => changeNext()} />
        </div>
      </div>
    </BannerWrapper>
  )
})

export default Banner