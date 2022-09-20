import * as actionTypes from "./constants"
import api from "@/api"
import { getRandomNum } from "@/utils/math-utils"

export const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
})
export const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex: index,
})
const changeCurrentSongAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: song,
})
export const getCurrentSongAction = (params) => {
  return (dispatch, getState) => {
    // 根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(["player", "playList"])
    const songIndex = playList.findIndex((song) => song.id === params.ids)
    // 判断是否找到歌曲
    if (songIndex !== -1) {
      // 找到歌曲
      const song = playList[songIndex]
      dispatch(changeCurrentSongIndexAction(song?.id))
      dispatch(changeCurrentSongAction(song))
    } else {
      // 没有找到歌曲
      api.Player.getSongDetail(params).then((res) => {
        const song = res.songs && res.songs[0]
        if (!song) return
        // 将最新请求到的歌添加到播放列表
        const newPlayList = [...playList]
        newPlayList.push(song)
        // 更新redux中的playList
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(song?.id))
        dispatch(changeCurrentSongAction(song))
      })
    }
  }
}

export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})

export const switchCurrentSong = (tag) => {
    return (dispatch, getState) => {
      const sequence = getState().getIn(['player', 'sequence'])
      const playList = getState().getIn(["player", "playList"])
      const currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
      const curIndex = playList.findIndex(item => item.id === currentSongIndex)
      let newIndex = curIndex
      switch (sequence) {
        case 1: // 随机播放
            let randomIndex = curIndex
            while (randomIndex === curIndex) {
                randomIndex = getRandomNum(playList.length)
            }
            newIndex = randomIndex
            break
        default: // 其他情况默认顺序播放
            newIndex = curIndex + tag
            if (newIndex < 0) newIndex = playList.length - 1
            if (newIndex > playList.length - 1) newIndex = 0
      }
      const curSong = playList[newIndex]
      dispatch(changeCurrentSongIndexAction(curSong.id))
      dispatch(changeCurrentSongAction(curSong))
    }
}
