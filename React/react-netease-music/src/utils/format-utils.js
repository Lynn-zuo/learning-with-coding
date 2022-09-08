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
    if (imgUrl.includes('?') && imgUrl.slice(-1) !== '?') {
        return `${imgUrl}&param=${size}*${size}`
    } else if (imgUrl.slice(-1) === '?') {
        return `${imgUrl}param=${size}x${size}`
    }
    return `${imgUrl}?param=${size}x${size}`
}
