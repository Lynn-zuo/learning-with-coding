import React, { memo, useEffect, useRef, useState } from 'react'
import { Slider } from 'antd'
import { StepBackwardOutlined, PlayCircleOutlined, StepForwardOutlined,
         FolderAddOutlined, SelectOutlined, UploadOutlined,
         SoundFilled, RetweetOutlined, ContainerOutlined } from '@ant-design/icons'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { formatSizeImg, formatMinuteSecond, getPlayerSong } from '@/utils/format-utils'
import { getCurrentSongAction } from '../store/actionCreators'
import { PlayerBarWrapper, ControlBtnWrapper, PlayerProgressWrapper, OperateBtnWrapper } from './style'
const PlayerBar = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentSongAction({ ids: 566436427 }))
  }, [dispatch])

  const { currentSong = {} } = useSelector((state) => ({
    currentSong: state.getIn(['player', 'currentSong'])
  }), shallowEqual)
  
  const audioRef = useRef()
  const playMusic = () => {
    audioRef.current.src = getPlayerSong(currentSong?.id)
    audioRef.current.play()
  }

  const stopMusic = () => {
    audioRef.current.pause()
  }

  const [currentTime, setCurrentTime] = useState(0)
  const timeUpdate = (e) => {
    setCurrentTime(e.target.currentTime * 1000)
  }

  const formatter = () => {return <span>{formatMinuteSecond(currentTime)}</span>}
  return (
    <PlayerBarWrapper>
      <div className="player-content wrap-v1">
        <ControlBtnWrapper>
          <StepBackwardOutlined className='btn btn-prev' onClick={() => stopMusic()} />
          <PlayCircleOutlined className='btn btn-change' onClick={() => playMusic()} />
          <StepForwardOutlined className='btn btn-next' />
        </ControlBtnWrapper>
        <PlayerProgressWrapper>
          <div className="img-wrapper">
            <a href="/">
              <img className='song-cover-img' src={formatSizeImg(currentSong?.al?.picUrl, 35)} alt="cover" />
            </a>
          </div>
          <div className="song-progress-wrap">
            <div className="song-info">
              <a className='song-title' href="/">{currentSong.name}</a>
              <a href="/">{currentSong?.ar && currentSong?.ar[0]?.name}</a>
            </div>
            <div className="progress-bar-wrap">
              <Slider className="progress-bar"
                value={currentTime / currentSong?.dt * 100 }
                tooltip={{ formatter }}
                trackStyle={{backgroundColor: '#c80b0d'}}
                handleStyle={{backgroundColor: '#c80b0d', border: '4px solid #fff'}}
                draggableTrack={true} />
              <span>{formatMinuteSecond(currentTime) || 0}</span>
              <span>/{formatMinuteSecond(currentSong?.dt) || 0}</span>
            </div>
          </div>
        </PlayerProgressWrapper>
        <OperateBtnWrapper>
          <div className="operate-left">
            <FolderAddOutlined className='btn' />
            <SelectOutlined className='btn' />
            <UploadOutlined className='btn' />
          </div>
          <div className="operate-right">
            <SoundFilled className='btn' />
            <RetweetOutlined className='btn' />
            <ContainerOutlined className='btn' />
          </div>
        </OperateBtnWrapper>
      </div>
      <audio ref={audioRef} src='' onTimeUpdate={(e) => timeUpdate(e)}></audio>
    </PlayerBarWrapper>
  )
})

export default PlayerBar