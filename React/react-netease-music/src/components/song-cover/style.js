import styled from "styled-components";

export const SongCoverWrapper = styled.div`
  width: 140px;
  margin: 8px 16px 0 0;
  .cover-img-wrapper {
    position: relative;
  }
  .song-cover-img {
    width: 140px;
    height: 140px;
    color: #ccc;
  }
  .play-cover {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    padding: 2px 8px;
    font-size: 12px;
    color: #ccc;
    .icon-listen {
        margin-right: 5px;
    }
    .icon-play {
        margin-left: auto;
    }
  }
  .song-cover-title {
    font-size: 14px;
  }
`