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
  margin-right: 10px;
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
    width: 120px;
    display: flex;
    justify-content: space-around;
    padding-right: 10px;
    border-left: 1px solid #000;
  }
  .operate-right {
    width: 180px;
    display: flex;
    justify-content: space-around;
    margin-top: 3px;
  }
  .btn {
    display: inline-block;
    box-sizing: border-box;
  }
  .btn-pop-detail {
    width: 19px;
	height: 19px;
	background: url(${props => props.bgPopDetail}) no-repeat -4px -4px;
    &:hover {
        background-position: -4px -29px;
    }
  }
  .btn-add-file {
	background: url(${props => props.bgSpirit}) no-repeat -92px -166px;
	width: 19px;
	height: 19px;
    &:hover {
        background-position: -92px -192px;
    }
  }
  .btn-share {
    background: url(${props => props.bgSpirit}) no-repeat -118px -167px;
	width: 19px;
	height: 19px;
    &:hover {
        background-position: -118px -193px;
    }
  }
  .btn-volume {
    margin-top: 1px;
    background: url(${props => props.bgSpirit}) no-repeat -5px -250px;
	width: 19px;
	height: 20px;
    &:hover {
        background-position: -34px -250px;
    }
  }
  .btn-sequence {
    margin-top: 1px;
    width: 19px;
	height: 18px;
    background: url(${props => props.bgSpirit}) no-repeat;
    background-position: ${props => {
        switch (props.sequence) {
            case 0:
                return '-6px -346px;'
            case 1:
                return '-69px -251px;'
            case 2:
                return '-69px -346px;'
            default:
                return '-6px -346px;'
        }
    }};
    &:hover {
      background-position: ${props => {
        switch (props.sequence) {
            case 0:
                return '-36px -346px;'
            case 1:
                return '-96px -251px;'
            case 2:
                return '-96px -346px;'
            default:
                return '-36px -346px;'
        }
    }};
    }
  }
  .btn-play-list {
    background: url(${props => props.bgSpirit}) no-repeat -45px -71px;
	width: 59px;
	height: 28px;
    &:hover {
        background-position: -45px -101px;
    }
  }
`