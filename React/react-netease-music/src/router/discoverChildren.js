

import Recommend from '@/pages/discover/c-pages/recommend'
import RankList from '@/pages/discover/c-pages/rank-list'
import SongList from '@/pages/discover/c-pages/song-list'
import Station from '@/pages/discover/c-pages/station'
import NewDisc from '@/pages/discover/c-pages/new-disc'
const discoverChildren = [{
    index: true,
    element: <Recommend />
}, {
    path: 'rank',
    element: <RankList />
}, {
    path: 'song',
    element: <SongList />
}, {
    path: 'station',
    element: <Station />
}, {
    path: 'new-disc',
    element: <NewDisc />
}]

export default discoverChildren