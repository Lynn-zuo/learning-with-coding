export const parseLyric = (lyrStr) => {
    const lineLyrics = lyrStr.split('\n')
    const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
    const lyrics = []
    for (const line of lineLyrics) {
        if (line) {
          const resExp = parseExp.exec(line)
          if (!resExp) continue
          const time1 = resExp[1] * 60 * 1000
          const time2 = resExp[2] * 1000
          const time3 = resExp[3].length === 3 ? resExp[3] * 1 : resExp[3] * 10
          const time = time1 + time2 + time3
          const content = line.replace(parseExp, '').trim()
          const lineObj = { time, content }
          lyrics.push(lineObj)
        }
    }
    return lyrics
}