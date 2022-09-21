import * as actionTypes from "./constants"
import api from "@/api"
import { getRandomNum } from "@/utils/math-utils"
import { parseLyric } from "@/utils/parse-utils"

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

const changeLyricListAction = (lyricList) => ({
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList
})

export const getCurrentSongAction = (params) => {
  return (dispatch, getState) => {
    // 根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(["player", "playList"])
    const songIndex = playList.findIndex((song) => song.id === params.ids)
    let song = null
    // 判断是否找到歌曲
    if (songIndex !== -1) {
      // 找到歌曲
      song = playList[songIndex]
      dispatch(changeCurrentSongIndexAction(song?.id))
      dispatch(changeCurrentSongAction(song))
      //  请求该歌曲的歌词
      dispatch(getLyricAction(song.id))
    } else {
      // 没有找到歌曲
      api.Player.getSongDetail(params).then((res) => {
        song = res.songs && res.songs[0]
        if (!song) return
        // 将最新请求到的歌添加到播放列表
        const newPlayList = [...playList]
        newPlayList.push(song)
        // 更新redux中的playList
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(song?.id))
        dispatch(changeCurrentSongAction(song))
        //  请求该歌曲的歌词
        dispatch(getLyricAction(song.id))
      })
    }
  }
}

export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})

export const changeCurrentIndexAndSongAction = (tag) => {
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
      //  请求该歌曲的歌词
      dispatch(getLyricAction(curSong.id))
    }
}

export const getLyricAction = (curSongIndex) => {
    return dispatch => {
        api.Player.getLyric({id: curSongIndex}).then(res => {
            const lyrStr = res.lrc.lyric
            const lyrics = parseLyric(lyrStr)
            console.log(lyrics, '-----lyrics')
            dispatch(changeLyricListAction(lyrics))
        })
    }
}
