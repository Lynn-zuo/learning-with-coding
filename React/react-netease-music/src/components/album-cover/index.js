import React, { memo } from 'react'
import bgImg from '@/assets/img/bg-disc.jpg'
import { AlbumCoverWrapper } from './style'

const AlbumCover = memo((props) => {
  const { width, imgHeight, coverImg, title, author} = props
  return (
    <AlbumCoverWrapper width={width} imgHeight={imgHeight} bgImg={bgImg}>
        <img className='cover-img' src={coverImg} alt="cover" />
        <div className='album-title no-wrap'>{title}</div>
        <div className='album-author no-wrap'>{author}</div>
    </AlbumCoverWrapper>
  )
})

export default AlbumCover