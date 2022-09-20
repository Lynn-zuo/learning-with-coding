import React, { memo } from "react"

import bgPlayer from "@/assets/img/bg-player.jpg"
import { PlayerWrapper, PlayerLeftWrapper, PlayerRightWrapper } from "./style"
const Player = memo(() => {
  return (
    <PlayerWrapper bgImg={bgPlayer}>
      <div className='player-content wrap-v1'>
        <PlayerLeftWrapper>
          <div>playerInfo</div>
          <div>songContent</div>
        </PlayerLeftWrapper>
        <PlayerRightWrapper>
          <div>simiPlaylist</div>
          <div>simisong</div>
          <div>download</div>
        </PlayerRightWrapper>
      </div>
    </PlayerWrapper>
  )
})

export default Player
