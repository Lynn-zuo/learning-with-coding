import styled from "styled-components"

export const ThemeHeaderRCMWrapper = styled.div`
  border-bottom: 2px solid #C10D0C;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 2px 8px 1px 5px;
`

export const ThemeHeaderLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgb(51, 51, 51);
  img {
    width: 20px;
    height: 20px;
    margin-top: 5px;
  }
  .title {
    font-size: 20px;
    font-weight: 600;
    margin-left: 3px;
  }
  .nav-list {
    margin-left: 12px;
    font-size: 14px;
    margin-top: 3px;
    span {
        margin: 0 8px;
    }
  }
`

export const ThemeHeaderRightWrapper = styled.div`
  color: rgb(102, 102, 102);
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  .arrow-right {
    width: 7px;
    height: 7px;
    border: 1px solid;
    border-color: #C10D0C #C10D0C transparent transparent;
    transform: rotate(45deg);
  }
`
