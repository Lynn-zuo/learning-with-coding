import React, { memo, useEffect, useRef } from 'react'
import { Carousel } from 'antd'
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import AlbumCover from '@/components/album-cover'
import { NewRCMWrapper, NewDiscWrapper, ItemPageWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getAlbumNewestAction } from '../../store/actionCreators'

const NewRCM = memo(() => {
  const carouselRef = useRef()
  const changePrev = () => {
    carouselRef.current.prev()
  }
  const changeNext = () => {
    carouselRef.current.next()
  }
  const { albumNewest = [] } = useSelector(state => ({
    albumNewest: state.getIn(['recommend', 'albumNewest'])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAlbumNewestAction())
  }, [dispatch])

  return (
    <NewRCMWrapper>
      <ThemeHeaderRCM title='新碟上架' />
      <NewDiscWrapper>
        <div className="new-disc-inner">
          <span className='arrow arrow-left' onClick={() => changePrev()}></span>
          <div className="newest-content">
            <Carousel ref={carouselRef} dots={false}>
              { [0, 1].map(page => <ItemPageWrapper key={page}>
                {albumNewest.slice(page * 5, (page+1) * 5).map(album =>
                <AlbumCover key={album.id}
                  coverImg={album.picUrl}
                  title={album.name}
                  author={album.artist?.name}
                  width='122'
                  imgHeight='106' />)}
              </ItemPageWrapper>) }
            </Carousel>
          </div>
          <span className='arrow arrow-right' onClick={() => changeNext()}></span>
        </div>
      </NewDiscWrapper>
    </NewRCMWrapper>
  )
})

export default NewRCM