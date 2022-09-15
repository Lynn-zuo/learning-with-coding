import React, { memo } from 'react'
import { CustomerServiceOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { formatCount, formatSizeImg } from '@/utils/format-utils'

import { SongCoverWrapper } from './style'
const SongCover = memo((props) => {
  return (
    <SongCoverWrapper>
        <div className='cover-img-wrapper'>
            <img className='song-cover-img' src={formatSizeImg(props.picUrl, 140)} alt="cover" />
            <div className="play-cover">
                <CustomerServiceOutlined className='icon-listen' />
                <span>{formatCount(props.playCount)}</span>
                <PlayCircleOutlined className='icon-play' />
            </div>
        </div>
        <p className='song-cover-title'>{props.name}</p>
        { props.author && <p className='song-cover-author'></p> }
    </SongCoverWrapper>
  )
})

export default SongCover