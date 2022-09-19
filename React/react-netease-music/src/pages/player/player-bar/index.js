import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Slider } from 'antd'
import { StepBackwardOutlined, PlayCircleOutlined, StepForwardOutlined,
         FolderAddOutlined, SelectOutlined, UploadOutlined, PauseCircleOutlined,
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
  useEffect(() => {
    audioRef.current.src = getPlayerSong(currentSong?.id)
  }, [currentSong?.id])

  const [isPlaying, setIsPlaying] = useState(false)
  
  const playMusic = () => {
    setIsPlaying(!isPlaying)
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
  }

  const stopMusic = () => {
    audioRef.current.pause()
  }

  const [isChanging, setIsChanging] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const timeUpdate = (e) => {
    if (isChanging) return
    setCurrentTime(e.target.currentTime * 1000)
    setProgress((e.target.currentTime * 1000) / (currentSong?.dt || 0) * 100)
  }

  const sliderChange = useCallback((value) => {
    setIsChanging(true)
    const curTime = value / 100 * currentSong?.dt
    setCurrentTime(curTime)
    setProgress(value)
  }, [currentSong?.dt])
  const sliderAfterChange = useCallback((value) => {
    const curTime = value / 100 * currentSong?.dt / 1000
    audioRef.current.currentTime = curTime
    if (!isPlaying) {
      audioRef.current.play()
    }
    setIsChanging(false)
  }, [currentSong?.dt, isPlaying])
  return (
    <PlayerBarWrapper>
      <div className="player-content wrap-v1">
        <ControlBtnWrapper>
          <StepBackwardOutlined className='btn btn-prev' onClick={() => stopMusic()} />
          { isPlaying ? <PauseCircleOutlined className='btn btn-change' onClick={() => playMusic()} /> : 
            <PlayCircleOutlined className='btn btn-change' onClick={() => playMusic()} /> }
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
                value={progress}
                tipFormatter={null}
                trackStyle={{backgroundColor: '#c80b0d', height: '8px'}}
                handleStyle={{backgroundColor: '#c80b0d', border: '4px solid #fff'}}
                onChange={(e) => sliderChange(e)}
                onAfterChange={(e) => sliderAfterChange(e)} />
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