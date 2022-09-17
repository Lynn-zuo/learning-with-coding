import React, { memo } from 'react'
import { PlayCircleOutlined, FolderAddOutlined, PlusOutlined } from '@ant-design/icons'
import bgRankImg from '@/assets/img/bg-rank-list.jpg'

import { TopRankingWrapper, HeaderWrapper, ListWrapper, FootWrapper } from './style'

const TopRanking = memo((props) => {
  const { coverImgUrl, name, tracks = [] } = props.rankInfo
  return (
    <TopRankingWrapper bgImg={bgRankImg}>
        <HeaderWrapper>
            <div className="cover-img-wrap">
              <img className='cover-img' src={coverImgUrl} alt="cover" />
            </div>
            <div className="cover-title-wrapper">
                <div className="cover-title">{name}</div>
                <div className="btn-wrap">
                  <PlayCircleOutlined className='btn btn-play-music' />
                  <FolderAddOutlined className='btn btn-add-file'  />
                </div>
            </div>
        </HeaderWrapper>
        <ListWrapper>
            { tracks?.map((music,muIndex) => <li key={music.id} className='music-line'>
                <span>{muIndex+1}</span>
                <div className="music-info-line no-wrap">
                  <span className='no-wrap'>{music.name}</span>
                  <div className="operate-line">
                    <PlayCircleOutlined className='btn btn-play-music' />
                    <PlusOutlined className='btn btn-add-music'  />
                    <FolderAddOutlined className='btn btn-add-file'  />
                  </div>
                </div>
            </li>) }
        </ListWrapper>
        <FootWrapper>
            <span>查看全部&gt;</span>
        </FootWrapper>
    </TopRankingWrapper>
  )
})

export default TopRanking