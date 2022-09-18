import styled from "styled-components";

export const PlayerBarWrapper = styled.div`
  height: 58px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #191919;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ControlBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90px;
  .btn {
    font-size: 20px;
    margin-right: 7px;
    &.btn-change {
        font-size: 26px;
    }
  }
`

export const PlayerProgressWrapper = styled.div`
  width: 700px;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .song-cover-img {
    width: 35px;
    height: 35px;
    border-radius: 3px;
  }
  .song-progress-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
    .song-info {
        font-size: 13px;
        margin-top: 4px;
    }
    a {
        color: #c1c1c1;
    }
    .song-title {
        color: #fff;
        margin-right: 6px;
    }
    .progress-bar-wrap {
        margin-top: -4px;
        display: flex;
        flex-direction: row;
    }
    .progress-bar {
        width: 520px;
        margin-right: 10px;
        .ant-slider-rail {
            background-color: #535353;
            height: 8px;
            border-radius: 8px;
        }
        .ant-slider-handle {
            margin-top: -3px;
        }
    }
  }
`

export const OperateBtnWrapper = styled.div`
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .operate-left {
    width: 90px;
    border-left: 1px solid #000;
  }
  .operate-right {
    width: 90px;
  }
  .btn {
    font-size: 20px;
    margin-right: 8px;
  }
`