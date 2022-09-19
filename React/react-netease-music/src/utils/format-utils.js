// 格式化播放量
export const formatCount = (count) => {
    if (count < 10000) {
        return count
    } else if ((count / 10000) < 10000) {
        return Math.floor(count/1000) / 10 + '万'
    } else {
        return Math.floor(count/10000000) / 10 + '亿'
    }
}

// 格式化图片大小
export const formatSizeImg = (imgUrl, size) => {
    if (imgUrl?.includes('?') && imgUrl?.slice(-1) !== '?') {
        return `${imgUrl}&param=${size}x${size}`
    } else if (imgUrl?.slice(-1) === '?') {
        return `${imgUrl}param=${size}x${size}`
    }
    return `${imgUrl}?param=${size}x${size}`
}

// 格式化时间长度
export const formateDate = (time, fmt) => {
    let date = new Date(time)
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substring(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if(new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    return fmt
}

const padLeftZero = (str) => {
    return ('00' + str).substring(str.length)
}

export const formatMonthDay = (time) => {
    return formateDate(time, 'MM月dd日')
}
export const formatMinuteSecond = (time) => {
    return formateDate(time, 'mm:ss')
}

export const getPlayerSong = (id) => {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}