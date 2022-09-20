import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'
import { StepBackwardOutlined, PlayCircleOutlined, StepForwardOutlined, PauseCircleOutlined } from '@ant-design/icons'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { formatSizeImg, formatMinuteSecond, getPlayerSong } from '@/utils/format-utils'
import bgSpirit from '@/assets/img/bg-spirit.png'
import bgPopDetail from '@/assets/img/bg-pop-detail.png'
import { getCurrentSongAction, changeSequenceAction, changeCurrentIndexAndSongAction } from '../store/actionCreators'
import { PlayerBarWrapper, ControlBtnWrapper, PlayerProgressWrapper, OperateBtnWrapper } from './style'
const PlayerBar = memo(() => {
  const { currentSongIndex = 566436427, currentSong = {}, sequence = 0 } = useSelector((state) => ({
    currentSongIndex: state.getIn(['player', 'currentSongIndex']),
    currentSong: state.getIn(['player', 'currentSong']),
    sequence: state.getIn(['player', 'sequence'])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentSongAction({ ids: currentSongIndex }))
  }, [dispatch, currentSongIndex])
  
  const audioRef = useRef()
  useEffect(() => {
    audioRef.current.src = getPlayerSong(currentSong?.id)
    audioRef.current.play().then(r => {
      setIsPlaying(true)
    }).catch(err => {})
  }, [currentSong?.id])

  const [isPlaying, setIsPlaying] = useState(false)
  
  const playMusic = useCallback(() => {
    setIsPlaying(!isPlaying)
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
  }, [isPlaying])

  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }
  const handleMusicEnded = (e) => {
    if (sequence === 2) { // 单曲
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
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
      playMusic()
    }
    setIsChanging(false)
  }, [currentSong?.dt, isPlaying, playMusic])

  const changeSequence = () => {
    let curSequence = sequence + 1
    if (curSequence > 2) {
      curSequence = 0
    }
    dispatch(changeSequenceAction(curSequence))
  }
  return (
    <PlayerBarWrapper>
      <div className="player-content wrap-v1">
        <ControlBtnWrapper>
          <StepBackwardOutlined className='btn btn-prev' onClick={() => changeMusic(-1)} />
          { isPlaying ? <PauseCircleOutlined className='btn btn-change' onClick={() => playMusic()} /> : 
            <PlayCircleOutlined className='btn btn-change' onClick={() => playMusic()} /> }
          <StepForwardOutlined className='btn btn-next' onClick={() => changeMusic(1)} />
        </ControlBtnWrapper>
        <PlayerProgressWrapper>
          <div className="img-wrapper">
            <NavLink to="/discover/player">
              <img className='song-cover-img' src={formatSizeImg(currentSong?.al?.picUrl, 35)} alt="cover" />
            </NavLink>
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
        <OperateBtnWrapper bgSpirit={bgSpirit} bgPopDetail={bgPopDetail} sequence={sequence}>
          <div className="operate-left">
            <span className='btn btn-pop-detail' />
            <span className='btn btn-add-file' />
            <span className='btn btn-share' />
          </div>
          <div className="operate-right">
            <span className='btn btn-volume' />
            <span className='btn btn-sequence' onClick={() => changeSequence()} />
            <span className='btn btn-play-list' />
          </div>
        </OperateBtnWrapper>
      </div>
      <audio ref={audioRef}
        onTimeUpdate={(e) => timeUpdate(e)}
        onEnded={(e) => handleMusicEnded(e)} />
    </PlayerBarWrapper>
  )
})

export default PlayerBar