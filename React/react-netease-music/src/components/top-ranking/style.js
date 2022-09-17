import styled from "styled-components"

export const TopRankingWrapper = styled.div`
  width: 232px;
  background: url(${props => props.bgImg}) no-repeat;
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 19px 19.5px;
  .cover-img-wrap {
    width: 94px;
    .cover-img {
        width: 81px;
    }
  }
  .cover-title-wrapper {
    padding-top: 4px;
  }
  .cover-title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 6px;
  }
  .btn {
    color: #c1c1c1;
    &.btn-play-music {
        font-size: 22px;
        margin-right: 8px;
    }
    &.btn-add-file {
        font-size: 24px;
    }
    &:hover {
        color: #656565;
    }
  }
`

export const ListWrapper = styled.div`
    height: 320px;
    overflow: hidden;
    .music-line {
        display: flex;
        flex-direction: row;
        height: 32px;
        line-height: 32px;
        padding: 2px 16px 2px 26px;
    }
    .music-info-line {
        flex: 1;
        margin-left: 12px;
        display: flex;
        flex-direction: row;
        .operate-line {
            display: none;
            padding-left: 2px;
            margin-left: auto;
            .btn {
                color: #c1c1c1;
                font-size: 18px;
                margin-left: 4px;
                &:hover {
                    color: #656565;
                }
            }
            .btn-play-music {
                font-size: 17px;
            }
        }
        &:hover {
            .operate-line {
                display: inline-block;
            }
        }
    }
`

export const FootWrapper = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 32px;
  line-height: 32px;
  padding: 0 32px;
`